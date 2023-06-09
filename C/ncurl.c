#include <stdlib.h>
#include <sys/wait.h>
#include <string.h>

int main(int argc, char *argv[]) {

	int size = 0;
	if (argc <= 1) return 1;
	for (int i = 1; i < argc; i++) {
		size = size + strlen(argv[i]);
		if (i != argc-1) size++; // account for spaces between arguments
	}

	char command[size+15]; // account for the string "/usr/bin/curl " + NULL terminator
	strcpy(command, "/usr/bin/curl ");
	for (int i = 1; i < argc; i++) {
		strcat(command, argv[i]);
		if (i != argc-1) strcat(command, " ");
	}

	clearenv();
	return WEXITSTATUS( system(command) );

}
