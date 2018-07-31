#!/usr/bin/env bash

echo "$(cat index-top.html)" \
  "<small>Updated $(date +"%a. %b %d, %Y")</small>" \
  "$(marked index-middle.md)" \
  "<small>Favicon via <a href="https://github.com/twitter/twemoji">Twemoji</a> (<a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>)</small>" \
  "$(cat index-bottom.html)" \
> public/index.html;
