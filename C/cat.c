#include <stdio.h>
#include <unistd.h>
#include <string.h>

void readf(FILE *fp) {
	char character;
	character = fgetc(fp);
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
			if ( strcmp(argv[i], "-" ) == 0) {
				readf(stdin);
				continue;
			} else if ( access(argv[i], F_OK) != 0 ) {
				fprintf(stderr, "cat: [ERR]: %s: nexist\n", argv[i]);
				continue;
			} else if ( access(argv[i], R_OK) != 0 ) {
				fprintf(stderr, "cat: [ERR]: %s: nreadabl\n", argv[i]);
				continue;
			}

			fp = fopen(argv[i], "r");
			if (fp == NULL) {
				fprintf(stderr, "cat: [WRN]: %s: fp is NULL\n", argv[i]);
				continue;
			}
			readf(fp);
		}
	}
	return 0;
}
