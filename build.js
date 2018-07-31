const fs = require('fs');
const util = require('util');

const marked = require('marked');

const readFile = util.promisify(fs.readFile);
marked.setOptions({ gfm: true });

Promise.all([
  readFile('index-top.html', 'utf8'),
  readFile('index-middle.md', 'utf8'),
]).then(([top, middle]) => {
  const result = `${top}
      ${marked(middle)};
    </body>
  </html>`;
  fs.writeFileSync('public/index.html', result);
  console.log('🎉');
}).catch((err) => {
  console.error('Build did not work. Here is the error:');
  console.error(err);
});