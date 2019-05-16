'use-strict'

const api = require('../api')
const expect = require('chai').expect


describe('Get user', function (){
    it('return type', async function(){ 
        let returned = await api.apiCallUser('');
        expect(returned).to.be.a('string') 
    })
    it('username return for a valid user', async function(){
        let returned = await api.apiCallUser('Leanne Graham')
        expect(returned).to.be.eql('200 User Found')
    })
    it('username return for a wrong user', async function(){
        let returned = await api.apiCallUser('wxy')
        expect(returned).to.be.eql('404 User Not Found')
    })
})
