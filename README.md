# MarkdownIt External Anchor
[![npm bundle size](https://img.shields.io/bundlephobia/min/markdown-it-external-anchor)](https://npmjs.com/package/markdown-it-external-anchor)
[![CI Test](https://github.com/binyamin/markdown-it-external-anchor/workflows/Test/badge.svg)](https://github.com/binyamin/markdown-it-external-anchor/actions)

Mark external, absolute links with appropriate rel & target attributes
- Prevents XSS attacks & provides good UX
- Does not affect HTML within markdown

> **Note**: If you want anything at all, just open an issue or [contact me](https://binyam.in/contact).

## Install
```console
$ npm install --save markdown-it markdown-it-external-anchor
```

## Usage
```js
const md = require("markdown-it")();
md.use(require("markdown-it-external-anchor"), {
    domain: "example.net",
    class: "external"
});

md.render("[text](https://example.com)");
```

### Options
- **domain** (default: `null`) - A domain which is considered an internal link.
    - When provided, localhost is implicit.
- **class** (default: `null`) - a class name, for CSS purposes

## Contributing
You can help by reporting bugs, suggesting features, or just giving general feedback! See the [contributing guidelines](https://github.com/binyamin/markdown-it-external-anchor/blob/main/CONTRIBUTING.md) for more information.

### Maintenance
This is just a personal project, so I don't expect contributions. That said, I'm open to all suggestions.

## License
[MIT](https://github.com/binyamin/markdown-it-external-anchor/blob/main/LICENSE) © [Binyamin Green](https://binyam.in)
