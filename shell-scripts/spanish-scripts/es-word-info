#!/bin/sh -eu

[ "$#" -ne 1 ] && exit 1

FILTER_PATTERN='^"contextE(n|s)"|^"translation"|^"textE(n|s)"|"(feminine|masculine|masculine or feminine) noun"'

curl --silent -L --user-agent "$USERAGENT" "https://www.spanishdict.com/translate/$1" | grep -o '"[^"]\+":"[^"]\+"' | \
	grep -E "$FILTER_PATTERN" | sed -e 's/"//g' -e 's/:/: /'
