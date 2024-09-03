import{EventEmitter} from 'events'

const myEmitter = new EventEmitter()

function greetHandler(name){
    console.log('Hello :) ' + name)
}
function goodbyeHandler(name){
    console.log('Goodbye :( ' + name)
}

//Register event listeners

myEmitter.on('greet' , greetHandler)
myEmitter.on('goodbye' , goodbyeHandler)

//Emit events

myEmitter.emit('greet' , 'Kaif')
myEmitter.emit('goodbye' , 'Kaif')

//Error handling
myEmitter.on('error' , (err)=>{
    console.log('Error Occured : ', err)
})

// Simulate error
myEmitter.emit('error' , new Error('Something went wrong'))