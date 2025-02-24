const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if(success) {
        resolve("The operation was successful!");
    } else {
        reject("Something went wrong!");
    }
});


console.log(promise)