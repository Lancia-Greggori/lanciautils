DATE=`show-date --full`
PREFIX=/usr/local
ETC_PATH=`echo $(PREFIX) | sed 's|/|\\\/|g'`\\/etc

test:
	echo $(ETC_PATH)
	sh -n wireless-manager

install: test
	rm -f $(PREFIX)/mbin/wireless-manager
	rm -f $(PREFIX)/etc/wireless-manager.subr
	ln -fs wireless-manager $(PREFIX)/mbin/wm
	install -m 0755 ./wireless-manager $(PREFIX)/mbin/
	sed -i'' "s/\.\/wireless-manager.subr/$(ETC_PATH)\/wireless-manager.subr/g" $(PREFIX)/mbin/wireless-manager
	install -m 0644 ./wireless-manager.subr $(PREFIX)/etc/

diff:
	-@diff -u ./wireless-manager $(PREFIX)/mbin/wireless-manager
	-@diff -u ./wireless-manager.subr $(PREFIX)/etc/wireless-manager.subr
