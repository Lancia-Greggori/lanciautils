#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

#define DEFAULT_ALLOWED_COMMANDS_FILE "/etc/priv.commands"
#define AUTHORISED_UID 1000
#define AUTHORISED_PATH "/bin:/sbin:/usr/local/mbin"
#define MAX_ALLOWED_CMDLINE_ARG_SIZE 100
#define MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE MAX_ALLOWED_CMDLINE_ARG_SIZE

int main(int argc, char *argv[])
{
	int cmdline_arg_size = 0;

	for(int i = 1; i < argc; i++) cmdline_arg_size = cmdline_arg_size + strlen(argv[i]);

	if(cmdline_arg_size > MAX_ALLOWED_CMDLINE_ARG_SIZE)
	{
		fprintf(stderr, "Error: size of passed command line argument(s) is longer than the max allowed %i characters\n", MAX_ALLOWED_CMDLINE_ARG_SIZE);

		return 1;
	}


	int uid;

	if(argc < 2)
	{
		fprintf(stderr, "Error: priv needs at least one argument\n");

		return 1;
	}

	else if( access(DEFAULT_ALLOWED_COMMANDS_FILE, R_OK) != 0 )
	{
		fprintf(stderr, "Error: %s is either not readable or does not exist\n", DEFAULT_ALLOWED_COMMANDS_FILE);

		return 1;
	}

	else if( ( uid = getuid() ) != AUTHORISED_UID )
	{
		fprintf(stderr, "Error: the user executing this program with uid %i does not match the allowed uid %i, permission denied\n", uid, AUTHORISED_UID);

		return 1;
	}

	char command[MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE];

	memset(command, 0, MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE);

	if(argc == 2)
	{
		strcpy(command, argv[1]);
	}

	else
	{
		for(int i = 1; i < argc; i++)
		{
			strcat(command, argv[i]);

			if( i != (argc - 1) ) strcat(command, " ");
		}
	}

	FILE *fp;

	fp = fopen(DEFAULT_ALLOWED_COMMANDS_FILE, "r");

	char temp_array[MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE];
 
	int character = 0;

	for(int i = 0; character != EOF; i++)
	{

		if(i > MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE)
		{
			fprintf(stderr, "Error: one of the lines in config file %s is higher than the allowed %i character limit (excluding the newline)\n", \
					DEFAULT_ALLOWED_COMMANDS_FILE, MAX_ALLOWED_COMMANDS_FILE_LINE_SIZE);

			return 1;

		}

		character = getc(fp);

		if(character == '\n')
		{
			temp_array[i] = '\0';

			if(strcmp(command, temp_array) == 0)
			{
				setuid(0);

				clearenv();

				setenv("PATH", AUTHORISED_PATH, 1);

				system(command);

				return 0;
			}

			else
			{
				i = -1;
			}
		}

		else temp_array[i] = character;
	}

	fprintf(stderr, "Error: the command you entered was not found in %s\n", DEFAULT_ALLOWED_COMMANDS_FILE);

	return 1;
}
