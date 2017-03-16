'use strict';

var unified = require('unified');
var remark2retext = require('remark-retext');
var english = require('retext-english');
var sentenceSpacing = require('retext-sentence-spacing');
var repeated = require('retext-repeated-words');
var indefinite = require('retext-indefinite-article');
var intensify = require('retext-intensify');

module.exports = attacher;

function attacher() {
  this.use(remark2retext, unified()
    .use(english)
    .use(sentenceSpacing, {preferred: 1})
    .use(repeated)
    .use(indefinite)
    .use(intensify)
  );
}
