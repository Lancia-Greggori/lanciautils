#include <stdio.h>
#include <stdlib.h>

#define DEFAULT_BUFF_SIZE 100

int main(int argc, char* argv[]) {
	int size = DEFAULT_BUFF_SIZE;
	char* buff = calloc(size, 1);
	char c;
	FILE* fp;
	for (int i = 1; i < argc; i++) {
		fp = fopen(argv[i], "r");
		for ( int j = 0; ( c = getc(fp) ) != EOF; j++ ) {
			if (j > size) {
				size += DEFAULT_BUFF_SIZE;
				buff = reallocarray(buff, size, 1);
			}
			buff[j] = c;
		}
	}
	return 0;
}
