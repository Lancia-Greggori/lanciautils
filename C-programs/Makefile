PREFIX=/usr/local

nothing:
	@echo make what?

echo: echo.c
	cc -g echo.c -o echo

install-echo: echo
	strip echo
	install -v -m 0755 ./echo /usr/local/mbin/

cat: cat.c
	cc -g cat.c -o cat

install-cat: cat
	strip cat
	install -v -m 0755 ./cat /usr/local/mbin/

install-all: install-echo install-cat

clean:
	rm -f echo cat
