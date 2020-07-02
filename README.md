# README

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for?

- Quick summary
- Version
- https://bitbucket.org/mobilelive/mobilelive-design-system-static-components/src/master/)

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
npm run build****
```

3. Watch for changes

```
npm run watch
```

### Run pretier to format the scss code

npx prettier --write .

### Run StyleLint to check errors in the scss code

npx stylelint "**/*.css"

# Information about root files

```
.pre-commit-config.yaml
```

- Have configs of pre commit hooks

```
.stylelintrc
```

- Have standard configurations of liniting
- some custom pre defined rules can be over ride
