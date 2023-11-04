#!/bin/sh -eu
awk '/`/,/`;/' $1 |
	grep -o '[a-z-]\+: [^;]\+;' |
	tr -d '[:;]' |
	while read -r line;
	do
		RULE="${line%% *}"
		ATTR="$(echo "$line" | cut -d' ' -f2)"
	done
