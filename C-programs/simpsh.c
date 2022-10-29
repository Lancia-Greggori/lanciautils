#include <stdbool.h>
#include <stdio.h>

#define BUFFER_SIZE 100

int main(void)
{
	char buffer[BUFFER_SIZE];
	char *rt = 0;

	while(true)
	{
		printf("--- $ ");
		rt = fgets(buffer, BUFFER_SIZE, stdin);
		if(rt == NULL) { putchar('\n'); break; }
		fputs(buffer, stdout);
	}

	return 0;
}
