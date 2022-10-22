PREFIX=/usr/local

priv: priv.c
	cc -g priv.c -o priv

install: priv
	strip priv
	install -m 4755 priv $(PREFIX)/mbin/

clean: 
	rm -f priv

uninstall:
	rm -f $(PREFIX)/mbin/priv
