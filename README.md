#devlinks

####A nicer way to treat development placeholder links.

##How to use

Simple! Any of your placeholder links need to have '_TEST' in the href. For example:

```html
<a href="CLIENT_TEST">Eventual link to some place</a>
```

Then just include the devlinks.js or devlinks.min.js file at the bottom of your page:

``` html
<script src="/path/to/devlinks.js"></script>
```

And BOOM! Your dev links will be blocked and return a pretty Growl-style message letting people know that link isn't ready to click.

## Dependencies

None!