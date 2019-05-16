'use-strict'

const request = require('request')
const URLusers = 'http://jsonplaceholder.typicode.com/users'


function apiCallUser(userName)
{
    return new Promise( (resolve, reject) => {
        request.get(URLusers, function (_, response, body) {
            if (response.statusCode !== 200) { reject( new Error('An error has occurred in the API call : ' + error) ) }
            
            users = JSON.parse(body)
    
            user = users.find(function(element){ return element.name == userName })
    
           if (user) { resolve('200 User Found') }
           else { resolve('404 User Not Found')
           }
        })
    })
}


module.exports = {
    apiCallUser
}
