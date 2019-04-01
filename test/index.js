/* eslint no-console: "off" */

'use strict'

const { should } = require('chai').use(require('chai-as-promised'))

const BaseJoi = require('joi')
const JoiLanguageExtension = require('../src')

const Joi = BaseJoi.extend(JoiLanguageExtension)

describe('Joi Country Extension', () => {

  before(async () => {
    should()
  })

  it(`should pass validation if valid ISO-639-1 language code provided`, async () => {
    const schema = Joi.string().language()
    const result = await schema.validate('ar').should.be.fulfilled
    result.should.be.equal('ar')
  })

  it(`should fail validation if ISO-639-1 code is not lowercase`, async () => {
      const schema = Joi.string().language()
      const error = await schema.validate('AR').should.be.rejected
    error.message.should.equal('"value" needs to be a valid ISO-639-1 language code')
  })

  it(`should fail validation if invalid string is provided`, async () => {
    const schema = Joi.string().language()
    const error = await schema.validate('Arabic').should.be.rejected
      error.message.should.equal('"value" needs to be a valid ISO-639-1 language code')
  })

  it(`should fail validation if ISO-639-1 code is not provided as a string`, async () => {
    const schema = Joi.string().language()
    const error = await schema.validate(123).should.be.rejected
    error.message.should.equal('"value" must be a string')
  })

})
