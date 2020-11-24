const test = require("ava");

// Note: example.com is external, example.org is internal

const md = require("markdown-it")();
md.use(require("./"), {domain: 'example.org'});

test('external link has added attributes', (t) => {
    const example = "[text](https://example.com)";
    const result = md.renderInline(example);
    t.true(result.includes(`rel="noopener noreferrer"`))
    t.true(result.includes(`target="_blank"`))
});

test('internal, relative link has no added attributes', (t) => {
    const example = "[text](/example)";
    const result = md.renderInline(example);
    t.false(result.includes(`rel="noopener noreferrer"`))
    t.false(result.includes(`target="_blank"`))
});

test('internal, absolute link has no added attributes', (t) => {
    const example = "[text](https://example.org)}";
    const result = md.renderInline(example);
    t.false(result.includes(`rel="noopener noreferrer"`))
    t.false(result.includes(`target="_blank"`))
});
