function loadScriptCallback(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}


function loadScriptPromise(src) {
    return new Promise(function( resolve, reject ) {
        let script = document.createElement('script');
        script.src = src;

        // When script loads, callback resolve() passing in script as the value
        script.onload = () => resolve(script);

        // When script runs errs, callback reject() passing in a new Error
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        
        document.head.append(script);
    })
}


/**
 * Consider the two examples above:
 * 
 * Using callback, notice how we how the callbacks must take different
 * shapes everytime we call them. 
 * 
 * Using promise, notice how the things happens in natural order. 
 * The tasks don't have to predefined beforehand.
 * Functions are called on the fly chaining .then(), .catch(), .finally()
 */ 
