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
	if(argc < 2) read_file(sdtin);

	return 0
}
