'use strict'

const languages = require('iso-639-1')

module.exports = joi => {
  return {
    base: joi.string(),
    name: 'string',
    language: {
      IsoLanguageInvalidFormat: 'needs to be a valid ISO-639-1 language code',
    },
    pre(value, state, options) {
      return value
    },
    rules: [
      {
        name: 'language',
        setup(params) {
          this._flags.language = true
        },
        validate(params, value, state, options) {
          if (languages.validate(value)) {
            return value.toLowerCase()
          }
          return this.createError('string.IsoLanguageInvalidFormat', { value }, state, options)
        },
      },
    ],
  }
}
