#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

#define COMMFILE "/letc/priv"
#define AUTHUID 1000
#define AUTHPATH "/bin:/sbin:/usr/local/umbin"
#define MAX_CMDLINE_ARG_SIZE 100
#define MAX_COMMFILE_LINE_SIZE MAX_CMDLINE_ARG_SIZE
#define PERR(S) fprintf(stderr, S"\n")

int main(int argc, char *argv[]) {

	if(argc < 2) return 1;

	int uid;
	int cmdline_arg_size = 0;
	for (int i = 1; i < argc; i++) cmdline_arg_size = cmdline_arg_size + strlen(argv[i]);
	if (cmdline_arg_size > MAX_CMDLINE_ARG_SIZE) {
		PERR("cmdline arg size bigger than max");
		return 2;
	} else if (access(COMMFILE, R_OK) != 0) {
		PERR("COMMFILE naccessible");
		return 3;
	} else if ((uid = getuid()) != AUTHUID) {
		PERR("UID nauthorised");
		return 4;
	}

	char command[MAX_COMMFILE_LINE_SIZE];
	memset(command, 0, MAX_COMMFILE_LINE_SIZE);
	if (argc == 2) {
		strcpy(command, argv[1]);
	} else {
		for (int i = 1; i < argc; i++) {
			strcat(command, argv[i]);
			if (i != (argc - 1)) strcat(command, " ");
		}
	}

	FILE *fp;
	fp = fopen(COMMFILE, "r");
	char tmp[MAX_COMMFILE_LINE_SIZE];
	int character = 0;
	for (int i = 0; character != EOF; i++) {
		if (i > MAX_COMMFILE_LINE_SIZE) {
			return 5;
		}
		character = getc(fp);
		if (character == '\n') {
			tmp[i] = '\0';
			if (strcmp(command, tmp) == 0) {
				setuid(0);
				clearenv();
				setenv("PATH", AUTHPATH, 1);
				system(command);
				return 0;
			} else {
				i = -1;
			}
		} else tmp[i] = character;
	}
	PERR("command not found in COMMFILE");
	return 6;
}
