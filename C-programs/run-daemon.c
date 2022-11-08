#include <unistd.h>
#include <fcntl.h>

int main(int argc, char *argv[])
{
	close(0);
	int fd = open("/dev/null", O_APPEND);
	dup2(fd, 1);
	execl("/bin/ls", "-l", NULL);
	return 0;
}
