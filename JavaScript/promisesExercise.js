const userLeft = true;
const userWatchingCatMeme = false

const watchTutorialCallback=((callback, errorCallback)=>{
    if (userLeft){
        errorCallback({
            name: 'User Left', 
            message: ':('
        })
    } else if (userWatchingCatMeme){
        errorCallback({
            name: 'User watching Cat Meme ',
            message: 'Tutorial< Cat to the user :( '
        })
    } else {
        callback("That's great you are watching tutorial :)")
    }
})

watchTutorialCallback((message)=>{
    console.log('Sucess: '+ message)
}, (err)=>{
    console.log(err.name+ " "+ err.message)
}
)

// Explain the above code in a simple manner:
// 1. We have a function called watchTutorialCallback which takes two parameters: callback and errorCallback
// 2. We have two variables: userLeft and userWatchingCatMeme
// 3. We have an if statement which checks if userLeft is true, if it is true, then we call the errorCallback function and pass in an object with two properties: name and message
// 4. We have an else if statement which checks if userWatchingCatMeme is true, if it is true, then we call the errorCallback function and pass in an object with two properties: name and message
// 5. We have an else statement which calls the callback function and passes in a string
// 6. We call the watchTutorialCallback function and pass in two functions: the first function is the callback function which takes in a parameter called message and console logs the message, the second function is the errorCallback function which takes in a parameter called err and console logs the err.name and err.message
// 7. The watchTutorialCallback function is called with two functions as parameters: the first function is the callback function which takes in a parameter called message and console logs the message, the second function is the errorCallback function which takes in a parameter called err and console logs the err.name and err.message
// 8. The callback function is called with userLeft and userWatchingCatMemes as a parameter
