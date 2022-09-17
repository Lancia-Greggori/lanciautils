#include <stdio.h>

void read_file(FILE *fp)
{
	char character;

	character = fgetc(fp);

	while(character != EOF)
	{
		putchar(character);

		character = fgetc(fp);
	}
}

int main(int argc, char *argv[])
{
	if(argc < 2) read_file(stdin);

	else
	{
		FILE *fp;

		for(int i = 1; i < argc; i++)
		{
			fp = fopen(argv[i], "r");

			read_file(fp);
		}

	}

	return 0;
}
