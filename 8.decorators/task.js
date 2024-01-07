//Задача № 1
function cachingDecoratorNew(func) {
  
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    
    function wrapper(...args) {
        clearTimeout(timeoutId);
        wrapper.allCount++;

        if (!timeoutId) {
            func(...args);
            wrapper.count++;
        }

        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);

    }
    
    wrapper.count = 0;
    wrapper.allCount = 0;

    return wrapper;
}

  module.exports = {
    debounceDecoratorNew, 
  }