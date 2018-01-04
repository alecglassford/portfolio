#!/usr/bin/env bash

echo "$(cat index-top.html)" "$(marked index-middle.md)" "<small>Updated $(date +"%a %b %d %Y"), Favicon via <a href="https://github.com/twitter/twemoji"> Twemoji</a></small>" "$(cat index-bottom.html)" > public/index.html;
firebase serve;
