#include <stdio.h>
#include <unistd.h>
#include <string.h>

void readf(FILE *fp) {
	char character;
	character = fgetc (fp);
	while (character != EOF) {
		putchar(character);
		character = fgetc(fp);
	}
}

int main(int argc, char *argv[]) {
	if (argc < 2) readf(stdin);
	else {
		FILE *fp;
		for (int i = 1; i < argc; i++) {
			if (strcmp(argv[i], "-") == 0) {
				readf(stdin);
				continue;
			} else if (access(argv[i], F_OK) != 0) {
				fprintf(stderr, "cat: [ERROR]: %s: no such file or directory\n", argv[i]);
				continue;
			} else if (access(argv[i], R_OK) != 0) {
				fprintf(stderr, "cat: [ERROR]: %s: file not readable\n", argv[i]);
				continue;
			}

			fp = fopen(argv[i], "r");
			if (fp == NULL) {
				fprintf(stderr, "cat: [ERROR]: %s: fp is NULL, skipping reading\n", argv[i]);
				continue;
			}
			readf(fp);
		}
	}
	return 0;
}
