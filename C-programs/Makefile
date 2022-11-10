CC = cc -Wall -g
BIN_DIR = /usr/local/umbin

nothing:
	@echo make what?

echo: echo.c
	$(CC) echo.c -o echo
install-echo: echo
	strip echo
	install -v -m 0755 echo $(BIN_DIR)

cat: cat.c
	$(CC) cat.c -o cat
install-cat: cat
	strip cat
	install -v -m 0755 cat $(BIN_DIR)

priv: priv.c
	$(CC) priv.c -o priv
install-priv: priv
	strip priv
	install -m 4755 priv $(BIN_DIR)

install-all: install-echo install-cat install-priv

clean:
	rm -f echo cat priv
