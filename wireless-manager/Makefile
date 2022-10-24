DATE=`show-date --full`
PREFIX=/usr/local
ETC_PATH=`echo $(PREFIX) | sed 's|/|\\\/|g'`\\/etc

test:
	echo $(ETC_PATH)
	sh -n wireless-manager

install: test
	rm -f $(PREFIX)/umbin/wireless-manager
	rm -f $(PREFIX)/etc/wireless-manager.subr
	ln -fs wireless-manager $(PREFIX)/umbin/wm
	install -m 0755 ./wireless-manager $(PREFIX)/umbin/
	sed -i'' "s/\.\/wireless-manager.subr/$(ETC_PATH)\/wireless-manager.subr/g" $(PREFIX)/umbin/wireless-manager
	install -m 0644 ./wireless-manager.subr $(PREFIX)/etc/

diff:
	-@diff -u ./wireless-manager $(PREFIX)/umbin/wireless-manager
	-@diff -u ./wireless-manager.subr $(PREFIX)/etc/wireless-manager.subr
