# Webpack typescript starter

<p align="center">
    <a href="https://github.com/hamzahamidi/webpack-typescript-starter/actions?query=workflow%3ABuild">
        <img src="https://github.com/hamzahamidi/webpack-typescript-starter/workflows/Build/badge.svg" alt="Build Status">
    </a>
    <a href="https://codecov.io/gh/hamzahamidi/webpack-typescript-starter">
        <img src="https://codecov.io/gh/hamzahamidi/webpack-typescript-starter/branch/main/graph/badge.svg?token=wkXcbGXFol"/>
    </a>
    <a href="https://app.netlify.com/sites/webpack-typescript-starter/deploys">
        <img src="https://api.netlify.com/api/v1/badges/a3caceb4-756f-42ae-913c-96700a2100a2/deploy-status" alt="Build Status">
    </a>
</p>

Webpack typescript starter with:

- Webpack 5
- Typescript
- SCSS (Dart Sass)
- SWC (Speedy Web Compiler)
- SWC/jest
- ESLint (flat config)

## [Demo](https://webpack-typescript-starter.netlify.app/)

## Getting started

Requires Node.js 22.15 or later. The version used for development and releases
is in [.nvmrc](.nvmrc).

### Install all dependencies

```bash
npm install
```

### Start developing and serve your app

```bash
npm start
```

The application will be available at http://localhost:4200 with hot module
replacement enabled.

### Build your application

```bash
npm run build
```

### Run unit tests

```bash
npm run test
```

This runs jest in watch mode. For a single run with a coverage report:

```bash
npm run coverage
```

### Lint and type-check

```bash
npm run lint
npm run typecheck
```

Types are checked by `tsc` only. SWC strips them at build time without checking,
so run `npm run typecheck` to catch type errors.

### Docker

Or simply run the example using docker:

```bash
docker compose up
```

The application will be available at http://localhost:4000
