# Joi Language Extension

A Joi extension for validation of [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.

### Installation

```
npm install --save joi-language-extension
```

### Usage

```js
const BaseJoi = require('joi')
const JoiLanguageExtension = require('joi-language-extension')
const Joi = BaseJoi.extend(JoiLanguageExtension)

const schema = Joi.string().language()
const result = await schema.validate('AR')

console.log(result) // ar
```

### Acknowledgment 
This repo is almost entirely based on https://github.com/Tallysticks/joi-country-extension.
