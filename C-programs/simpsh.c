#include <stdbool.h>
#include <stdio.h>

int main(void)
{
	char character = '\0';

	while(true)
	{
		puts("--- $ ");
		if( (character = getchar()) == EOF ) break;
		putchar(character);
	}

	return 0;
}
