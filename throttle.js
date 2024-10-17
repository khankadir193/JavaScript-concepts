function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};


// Function to be throttled
function logScrollPosition() {
  console.log('Scroll position:', window.scrollY);
}

// Throttling the logScrollPosition function with a limit of 500 milliseconds
const throttledLogScroll = throttle(logScrollPosition, 500);

// Adding the throttled function as an event listener for the scroll event
window.addEventListener('scroll', throttledLogScroll);

