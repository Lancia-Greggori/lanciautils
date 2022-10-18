#include <stdio.h>
#include <string.h>

#define BUFFER_SIZE 100

char buffer[BUFFER_SIZE];

int main(int argc, char *argv[])
{
	if(argc == 1) putchar('\n');

	else if(argc == 2) puts(argv[1]);

	else
	{
		for(int i = BUFFER_SIZE; i < BUFFER_SIZE; i++)
		{
			buffer[i] = '\0';
		}

		for(int i = 1; i < argc; i++)
		{
			strcat(buffer, argv[i]);

			strcat(buffer, " ");
		}

		puts(buffer);
	}

	return 0;
}
