#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

#define CMDFL "/letc/priv"
#define AUTHUID 1000
#define AUTHPATH "/usr/local/mbin:/bin:/sbin:/usr/bin:/usr/sbin"
#define MAXCMDLN_ARGSZ 100
#define MAXCMDFL_LNSZ MAXCMDLN_ARGSZ
#define PERR(S) fprintf(stderr, S"\n")

int main(int argc, char *argv[]) {

	if(argc < 2) return 1;

	int uid;
	int cmdln_argsz = 0;
	for (int i = 1; i < argc; i++)
		cmdln_argsz = cmdln_argsz + strlen(argv[i]);
	if (cmdln_argsz > MAXCMDLN_ARGSZ) {
		PERR("cmdln arg size bigger than max");
		return 2;
	} else if (access(CMDFL, R_OK) != 0) {
		PERR("CMDFL naccessible");
		return 3;
	} else if ((uid = getuid()) != AUTHUID) {
		PERR("UID nauthorised");
		return 4;
	}

	char cmd[MAXCMDFL_LNSZ];
	memset(cmd, 0, MAXCMDFL_LNSZ);
	if (argc == 2) {
		strcpy(cmd, argv[1]);
	} else {
		for (int i = 1; i < argc; i++) {
			strcat(cmd, argv[i]);
			if (i != (argc - 1)) strcat(cmd, " ");
		}
	}

	FILE *fp;
	fp = fopen(CMDFL, "r");
	char tmp[MAXCMDFL_LNSZ];
	int chrctr = 0;
	for (int i = 0; chrctr != EOF; i++) {
		if (i > MAXCMDFL_LNSZ) {
			return 5;
		}
		chrctr = getc(fp);
		if (chrctr == '\n') {
			tmp[i] = '\0';
			if (strcmp(cmd, tmp) == 0) {
				setuid(0);
				clearenv();
				setenv("PATH", AUTHPATH, 1);
				system(cmd);
				return 0;
			} else {
				i = -1;
			}
		} else tmp[i] = chrctr;
	}
	PERR("cmd not found in CMDFL");
	return 6;
}
