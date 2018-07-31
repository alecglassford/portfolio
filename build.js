#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

const marked = require('marked');

const readFile = util.promisify(fs.readFile);
marked.setOptions({ gfm: true });

const build = async function build() {
  const now = new Date();
  console.log(`Starting build at ${now.toTimeString()}`)
  try {
    const [top, middle] = await Promise.all([
      readFile('index-top.html', 'utf8'),
      readFile('index-middle.md', 'utf8'),
    ]);
    const result = `${top}
        <small>Updated ${now.toDateString()}</small>
        ${marked(middle)}
        <small>Favicon via <a href="https://github.com/twitter/twemoji">Twemoji</a> (<a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>)</small>
      </body>
    </html>`;
    fs.writeFileSync('public/index.html', result);
    console.log('🎉');
  } catch (err) {
    console.error('😿 Build did not work. Here is the error:');
    console.error(err);
  }
};

build();

if (process.argv[2] === 'watch') {
  console.log('👀 Watching for changes to index-middle and index-top');
  try {
    fs.watch('index-top.html', build);
    fs.watch('index-middle.md', build);
  } catch (err) {
    console.error('Could not watch 😰. Here is the error:');
    console.error(err);
  }
}