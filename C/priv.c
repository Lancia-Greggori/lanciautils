#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

#define DEFAULT_ALLOWED_COMMANDS_FILE "/letc/priv.commands"
#define AUTHORISED_UID 1000
#define AUTHORISED_PATH "/bin:/sbin:/usr/local/umbin"
#define MAX_ALLOWED_CMDLINE_ARG_SIZE 100
#define MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE MAX_ALLOWED_CMDLINE_ARG_SIZE

int main(int argc, char *argv[]) {

	if(argc < 2) return 1;

	int uid;
	int cmdline_arg_size = 0;
	for (int i = 1; i < argc; i++) cmdline_arg_size = cmdline_arg_size + strlen(argv[i]);
	if (cmdline_arg_size > MAX_ALLOWED_CMDLINE_ARG_SIZE) {
		return 2;
	} else if ( access(DEFAULT_ALLOWED_COMMANDS_FILE, R_OK) != 0 ) {
		return 3;
	} else if ( ( uid = getuid() ) != AUTHORISED_UID ) {
		return 4;
	}

	char command[MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE];
	memset(command, 0, MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE);
	if (argc == 2) {
		strcpy(command, argv[1]);
	} else {
		for (int i = 1; i < argc; i++) {
			strcat(command, argv[i]);
			if ( i != (argc - 1) ) strcat(command, " ");
		}
	}

	FILE *fp;
	fp = fopen(DEFAULT_ALLOWED_COMMANDS_FILE, "r");
	char tmp[MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE];
	int character = 0;
	for (int i = 0; character != EOF; i++) {
		if (i > MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE) {
			return 5;
		}
		character = getc(fp);
		if (character == '\n') {
			tmp[i] = '\0';
			if (strcmp(command, tmp) == 0) {
				setuid(0);
				clearenv();
				setenv("PATH", AUTHORISED_PATH, 1);
				system(command);
				return 0;
			} else {
				i = -1;
			}
		} else tmp[i] = character;
	}
	return 6;
}
