# Joi Language Extension
[![npm version](https://badge.fury.io/js/joi-language-extension.svg)](https://badge.fury.io/js/joi-language-extension)
[![Build Status](https://travis-ci.com/ahmadghizzawi/joi-language-extension.svg?branch=master)](https://travis-ci.com/ahmadghizzawi/joi-language-extension)

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
const result = await schema.validate('ar')

console.log(result) // ar
```

### Acknowledgment 
This repo is almost entirely based on https://github.com/Tallysticks/joi-country-extension.
