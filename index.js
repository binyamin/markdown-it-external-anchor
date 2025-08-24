/**
 * External Links MarkdownIt plugin
 * Mark external, absolute links as necessary
 *
 * @param {import("markdown-it")} md
 * @param {object} options
 * @param {string?} options.domain domain to consider an internal link.
 * @param {string?} options.class add a class (preserves existing)
 */

export default function (md, options = {}) {
	// Finds external links
	let regex = /^https?:\/\//;

	if (!!options.domain) {
		// Sanitize domain - remove the protocol, if existing
		const domain = options.domain.replace(/^https?:\/\//, '');

		regex = RegExp(`^https?:\/\/(?!${domain}|localhost)`);
	}

	/**
	 * @type {import("markdown-it/lib/parser_core").RuleCore}
	 */
	function link_external({ tokens }) {
		// Iterate through tokens, looking for links
		for (let t of tokens) {
			// There are no tokens, or we got an empty one (skip)
			if (!t) continue;

			// It's a block, but any links will be inline (skip)
			if (t.type !== 'inline') continue;

			// It's inline, but there are no child tokens (skip)
			if (!t.children) continue;

			// There's children, but no links
			if (t.children.filter((c) => c.type === 'link_open').length === 0) {
				continue;
			}

			for (let c of t.children) {
				// It's not a link (skip)
				if (c.type !== 'link_open') continue;

				let href = c.attrGet('href');

				// It's a link tag, but the url is missing (skip)
				if (!href) continue;

				// It's a link, but it's internal (skip)
				if (!regex.test(href)) continue;

				// We can start messing around now!

				// Note: `attrJoin` preserves existing values
				c.attrJoin('rel', 'noopener noreferrer');
				c.attrSet('target', '_blank');
				if (!!options.class) c.attrJoin('class', options.class);
			}
		}
	}

	md.core.ruler.push('link_external', link_external);
}
