CC = cc -Wall -g
UMBIN = /usr/mbin

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

ncurl: ncurl.c
	$(CC) ncurl.c -o ncurl
install-ncurl: ncurl
	strip ncurl
	install -v -m 6755 -o nobody -g nobody ncurl $(UMBIN)

priv: priv.c
	$(CC) priv.c -o priv
install-priv: priv
	strip priv
	install -m 4755 priv $(UMBIN)

install-all: install-echo install-cat install-priv install-ncurl

clean:
	echo *.c | sed 's/\.c//g' | xargs rm -f
