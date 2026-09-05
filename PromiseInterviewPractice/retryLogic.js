const fetchData = async () => {
    return new Promise((resolve, reject) => {
        // Randomly fail to test the retry logic
        const shouldFail = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldFail) {
                reject('Value has been rejected');
            } else {
                resolve('Promise has been resolved!');
            }
        }, 500); 
    });
};

// Helper function to pause execution
const delays = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryLogic = async (func, maxRetries = 3, delayMs = 1000) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            // Await the function. If it succeeds, immediately return the data.
            const result = await func();
            console.log(`Success on attempt ${attempt}`);
            return result; 
            
        } catch (error) {
            console.log(`Attempt ${attempt} failed: ${error}`);
            
            // If we've hit our max retries, throw the error to the caller
            if (attempt === maxRetries) {
                throw new Error(`All ${maxRetries} attempts failed. Last error: ${error}`);
            }
            
            // Wait before the next loop iteration
            await delays(delayMs);
        }
    }
};

// Usage
(async () => {
    try {
        const data = await retryLogic(fetchData, 3, 1000);
        console.log('Final Output:', data);
    } catch (err) {
        console.error('Final Error:', err.message);
    }
})();

// questiion:-Does maxRetries mean 3 total attempts, or 3 retries after the initial request?