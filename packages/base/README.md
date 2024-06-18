## Intro

This is my base ESLint config for TS projects. The config can be used standalone, but its main purpose is to be extended by [eslint-config-ts](../ts) and [eslint-config-tsx](../tsx).

## Install

```sh
npm i eslint eslint-plugin-import eslint-plugin-prettier
npm i @tubie/eslint-config-base
```


## Usage

```js
module.exports = {
  'root': true,
  
  'extends': [
    '@tubie/eslint-config-base'
  ]
};
```
