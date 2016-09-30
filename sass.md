# Sass/CSS Style Guide

Sass and CSS are powerful tools, but without proper care they can get out of hand quickly. Here are some guidelines to keep them manageable.

## scss-lint

The linter will complain a lot, but it means well. When creating a new file, resolve all the linter errors before checking the file in. When editing an existing file with linter errors, try to leave things better than you found them.

The gist of the linter rules is this:
- Limit nesting to three levels deep.
- Use variables for colors and fonts.
- Group similar properties together.
- Put `@include` and `@extend` before other rules.
- Use mixins to generate vendor prefixed values.
- Use tabs instead of spaces.

Run `grunt lint` to get an error count, or use the scss-lint plugin for your editor to see individual errors.

The linter rules generally follow the [WordPress CSS Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/).

## Keep it simple

Minimize nesting and selector specificity. Try to use just a single class selector where possible, and avoid using element names or IDs. For more on this topic, see [Stop the Cascade](http://markdotto.com/2012/03/02/stop-the-cascade/).

When solving CSS override problems, prefer removing and re-ordering things to adding things. Use Sass features where they're necessary, but when it's just as easy to use vanilla CSS, do so.

For example, you can do this in Sass:
```
.thing {
	@media (min-width: 768px) {
		display: block;
	}
}
```

But in this case, it's just as easy to write the CSS that will ultimately be produced:
```
@media (min-width: 768px) {
	.thing {
		display: block;
	}
}
```

Use `&` with care, and don't use it to generate class names. `&` is powerful but can get confusing in a hurry. As [the Selector Nesting](https://sass-guidelin.es/#selector-nesting) section of [sass-guidnelin.es](http://sass-guidelin.es/) points out, you can't search for a class name that's been generated with nesting. See also: [Nesting in Sass and Less](http://markdotto.com/2015/07/20/css-nesting/).

Similarly, it's great to use `@extend` and `@include` to automate generation of repeated selectors and properties, but it's even better if this code doesn't need to be repeated in the first place.

## Choose meaningful, concise names

We're loosely following the [SMACSS](https://smacss.com/) conventions. We might decide to use more or less of this guide over time. For now:

- Class names can contain a maximum of three parts, separated with single hyphens. For example, `.block`, `.block-element`, `.block-element-element`, or `.block-modifier`.
- If you need more than three parts for a class name, consider decoupling a child element from its parent block.
    - Without this limitation, it's easy to end up with a class name that contains half the DOM!
- Block, element, and modifier names should each consist of a single lowercase string.
- If a class name describes a state, begin the class with `is-`. For example, `.is-active`. It's okay to have a selector that contains both the element class and the state class, such as `.btn-search.is-active`.
- Try to choose names that describe a reusable block and the elements that make it up. Try to avoid class names that describe the style (`.btn-green`) or class names that are closely tied to specific content (`.btn-morning-rounds-email-form`).
- When writing code that may be used outside our site (e.g., a jQuery or WordPress plugin), namespace CSS classes to the name of your plugin. For example: `.myplugin-btn`.

## Write CSS to be read

Try to focus on making code readable and maintainable, rather than implementing micro-optimizations. Or, [as SMACSS puts it](https://smacss.com/book/selectors):

> Steve Souders, who works tirelessly on performance testing, examined the [performance impact of CSS selectors](http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/) and determined (back in 2009) that the delta between the best case and the worst case was 50ms. In other words, consider selector performance but don’t waste too much time on it.

Create new Sass partials as needed, and consider creating [a table of contents](https://www.smashingmagazine.com/2008/05/improving-code-readability-with-css-styleguides/#2-define-a-table-of-contents) for any file over a hundred lines or so.

## The style guide is a living document

These guidelines will evolve over time - that's why they're in Git, after all! If rules get in the way or stop making sense for our code, propose a change to our style guide. Don't write one file in a different style than the others. Every guide will have tradeoffs and drawbacks, but the only thing worse than wonky code is _inconsistently wonky_ code.

Happy styling!
