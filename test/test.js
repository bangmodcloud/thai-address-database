'use strict'

let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let expect = require('chai').expect
let db = require('../src')

// rewrite test for check current feature

describe('Show all province', ()=>{
  it('AllProvince should show all province in database', ()=>{
    let result = db.allProvince()
    expect(result.length).to.equal(77)
    expect(result[0] != result[1])
  })
})
