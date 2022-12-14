CC = cc -Wall -g
UMBIN = /usr/local/umbin

nothing:
	@echo make what?

echo: echo.c
	$(CC) echo.c -o echo
install-echo: echo
	strip echo
	install -v -m 0755 echo $(UMBIN)

cat: cat.c
	$(CC) cat.c -o cat
install-cat: cat
	strip cat
	install -v -m 0755 cat $(UMBIN)

nobody-curl: nobody-curl.c
	$(CC) nobody-curl.c -o nobody-curl
install-nobody-curl: nobody-curl
	strip nobody-curl
	install -v -m 4755 -o nobody -g nobody nobody-curl $(UMBIN)

priv: priv.c
	$(CC) priv.c -o priv
install-priv: priv
	strip priv
	install -m 4755 priv $(UMBIN)

install-all: install-echo install-cat install-priv install-nobody-curl

clean:
	echo *.c | sed 's/\.c//g' | xargs rm -f
