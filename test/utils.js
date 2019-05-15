'use-strict'

const utils = require('../utils')
const expect = require('chai').expect


describe('Random between index', function (){
    it('test return type', function(){ expect(utils.getRandomIntBetweenIndex(1,5)).to.be.a('number')})
    it('test if result is in the range', function () {
        expect(utils.getRandomIntBetweenIndex(1,5)).to.be.above(0)
        expect(utils.getRandomIntBetweenIndex(1,5)).to.be.below(6)
    })    
})

describe('Fizz Buzz', function (){
    it('test return type', function () { expect(utils.fizzbuzz()).to.be.a('array') })
    it('test index 3 & 5 has Fizz & Buzz', function () {
        expect(utils.fizzbuzz()[3]).to.be.eql('Fizz')
        expect(utils.fizzbuzz()[5]).to.be.eql('Buzz')
        expect(utils.fizzbuzz()[9]).to.be.eql('Fizz')
        expect(utils.fizzbuzz()[15]).to.be.eql('Fizz Buzz')
    })
})
