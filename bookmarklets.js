'use strict';

// Compile these with http://mrcoles.com/bookmarklet/


// Log reading
open('https://alec-reads.gomix.me/read?secret=PASTESECRETHERE&url=' + encodeURIComponent(document.URL));

//Star reading
open('https://alec-reads.gomix.me/read?secret=PASTESECRETHERE&url=' + encodeURIComponent(document.URL) +
    '&star=%20' + encodeURIComponent(prompt('Comment?')));
