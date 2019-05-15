'use-strict'

function getRandomIntBetweenIndex(min, max)
{
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}

function fizzbuzz() {
    let myArray = []

    for (let index = 0; index < 100; index++)
    {
        if (index % 3 === 0 && index %5 === 0)
        {
            myArray.push('Fizz Buzz')
        } else {
            index % 3 === 0 ? myArray.push('Fizz') : index % 5 === 0 ? myArray.push('Buzz') : myArray.push(index)
        }
    }
    return myArray
}


module.exports = {
    getRandomIntBetweenIndex,
    fizzbuzz,
}