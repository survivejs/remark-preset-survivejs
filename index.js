'use strict';

exports.settings = {
  bullet: '*',
  fences: true
};

exports.plugins = [
  require('./prose-retext'),
  require('remark-lint'),
  require('remark-lint-final-newline'),
  require('remark-lint-no-auto-link-without-protocol'),
  require('remark-lint-no-blockquote-without-caret'),
  require('remark-lint-no-literal-urls'),
  [require('remark-lint-ordered-list-marker-style'), '.'],
  require('remark-lint-hard-break-spaces'),
  require('remark-lint-no-duplicate-definitions'),
  require('remark-lint-no-heading-content-indent'),
  require('remark-lint-no-inline-padding'),
  require('remark-lint-no-shortcut-reference-image'),
  require('remark-lint-no-shortcut-reference-link'),
  require('remark-lint-no-undefined-references'),
  require('remark-lint-no-unused-definitions'),
  require('remark-comment-config'),
  require('remark-validate-links'),
  [require('remark-lint-checkbox-character-style'), {checked: 'x', unchecked: ' '}],
  require('remark-lint-checkbox-content-indent'),
  [require('remark-lint-code-block-style'), 'fenced'],
  require('remark-lint-definition-case'),
  require('remark-lint-definition-spacing'),
  [require('remark-lint-fenced-code-marker'), '`'],
  [require('remark-lint-file-extension'), 'md'],
  require('remark-lint-final-definition'),
  require('remark-lint-first-heading-level'),
  [require('remark-lint-heading-style'), 'atx'],
  [require('remark-lint-link-title-style'), '"'],
  require('remark-lint-no-consecutive-blank-lines'),
  require('remark-lint-no-duplicate-definitions'),
  require('remark-lint-no-emphasis-as-heading'),
  require('remark-lint-no-file-name-articles'),
  require('remark-lint-no-file-name-consecutive-dashes'),
  require('remark-lint-no-file-name-mixed-case'),
  require('remark-lint-no-file-name-outer-dashes'),
  require('remark-lint-no-heading-content-indent'),
  require('remark-lint-no-heading-indent'),
  require('remark-lint-no-heading-punctuation'),
  [require('remark-lint-no-missing-blank-lines'), {exceptTightLists: true}],
  require('remark-lint-no-multiple-toplevel-headings'),
  require('remark-lint-no-shell-dollars'),
  require('remark-lint-no-table-indentation'),
  require('remark-lint-no-tabs'),
  [require('remark-lint-ordered-list-marker-value'), 'ordered'],
  [require('remark-lint-rule-style'), '* * *'],
  [require('remark-lint-table-cell-padding'), 'padded'],
  require('remark-lint-table-pipe-alignment'),
  require('remark-lint-table-pipes'),
  [require('remark-lint-unordered-list-marker-style'), '*'],
  [require('remark-toc'), {maxDepth: 3, tight: true}],
  require('remark-github')
];
