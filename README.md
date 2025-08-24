# MarkdownIt External Anchor
[![npm bundle size](https://img.shields.io/bundlephobia/min/markdown-it-external-anchor)](https://npmjs.com/package/markdown-it-external-anchor)
[![CI Test](https://github.com/binyamin/markdown-it-external-anchor/workflows/Test/badge.svg)](https://github.com/binyamin/markdown-it-external-anchor/actions)

Mark external, absolute links with appropriate rel & target attributes
- Prevents XSS attacks & provides good UX
- Does not affect HTML within markdown

## Usage

### Install

```console
$ npm install --save markdown-it markdown-it-external-anchor
```

### Example

```js
import md from 'markdown-it';
import pluginExternalAnchor from 'markdown-it-external-anchor';

md.use(pluginExternalAnchor, {
    domain: 'example.net',
    class: 'external'
});

md.render('[text](https://example.com)'); // => <a href="https://example/com" rel="noopener noreferrer" target="_blank">text</a>
```

### Options
- **domain** (default: `null`) - A domain which is considered an internal link.
    - When _domain_ is provided, localhost is implicit.
- **class** (default: `null`) - a class name

## Maintenance

This is just a personal project. I do not consider it "released". That said, I'm
open to suggestions and contributions.

## Legal

All source-code is provided under the terms of
[the MIT license](https://github.com/binyamin/markdown-it-external-anchor/blob/main/LICENSE).

Copyright 2025 Binyamin Aron Green.
