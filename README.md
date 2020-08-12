# import-toml [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/import-toml/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/import-toml)

Import a TOML file.

[![NPM Badge](https://nodei.co/npm/import-toml.png)](https://npmjs.com/package/import-toml)

## Install

```sh
npm install import-toml
```

## Usage

```js
const importToml = require("import-toml");

const data = importToml.sync("file.toml");

console.log(data.value);
```

## API

### importToml(filename)

Returns a promise that resolves with the TOML contents parsed as an object.

### importToml.sync(filename)

Returns the TOML contents parsed as an object.

#### filename

Type: `string`

The file to import.
