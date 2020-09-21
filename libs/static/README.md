# Friday - The Design System - Static HTML&CSS

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for?

- Quick summary
- Version
- https://github.com/mobilelive-inc/friday-design-system/tree/master/libs/static

### How do I get set up?

It uses:

- SCSS with linting and autoprefixer
- JavaScript with webpack using babel and linting
- html partials and minify with post-html
- browser-sync

The compiled files will go to the directory "/dist"

- from `src/scss` to `dist/index.css`
- from `src/js` to `dist/bundle.js`
- from `src/views` to `dist/`

## Getting Started

1. Install dependencies

```
npm install
```

2. Build resources

```
npm run build
```

3. Watch for changes

```
npm run watch
```

### Run prettier to format the scss code

for all files: npx prettier --write .
npx prettier --write \*_/_.scss

### Run StyleLint to check errors in the scss code

npx stylelint \*_/_.scss

# Information about root files

```
.pre-commit-config.yaml
```

- Have configs of pre commit hooks

```
.stylelintrc
```

- Have standard configurations of linting
- some custom pre-defined rules can be over ride
