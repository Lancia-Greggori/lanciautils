#include <stdio.h>

int main(int argc, char *argv[])
{
	if(argc == 1) putchar('\n');

	else if(argc == 2) puts(argv[1]);

	else
	{
		for(int i = 1; i < argc; i++)
		{
			char *p = argv[i];

			for(int j = 0; p[j] != '\0'; j++)
			{
				putchar(p[j]);
			}

			if(i != (argc-1)) putchar(' ');
		}

		putchar('\n');
	}

	return 0;
}
