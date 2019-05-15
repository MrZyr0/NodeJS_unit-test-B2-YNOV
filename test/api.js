'use-strict'

const api = require('../api')
const expect = require('chai').expect


describe('Get user', function (){
    it('username return for a valid user', function(){ expect(api.getUser('Leanne Graham')).to.be.eql('200 User Found') })
    it('username return for a wrong user', function(){ expect(api.getUser('wxy')).to.be.eql('404 User Not Found') })
})
