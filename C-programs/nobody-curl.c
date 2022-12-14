#include <stdlib.h>
#include <sys/wait.h>
#include <string.h>

int main(int argc, char *argv[]) {
	int size = 0;
	if (argc <= 1) return 1;
	for (int i = 1; i < argc; i++) {
		size = size + strlen(argv[i]);
		if (i != argc-1) size++;
	}

	char *command = calloc(argc-1, size);
	//command = "curl \0";
	for (int i = 1; i < argc; i++) {
		strcat(command, argv[i]);
		if (i != argc-1) strcat(command, " ");
	}


	return 0;
}
