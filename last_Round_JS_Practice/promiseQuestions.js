// Q. Can you write a code example demonstrating the use of async and await?
// Ans. Demonstrate usage of async and await in JavaScript for asynchronous code execution.
// Approach
// Define an asynchronous function using async keyword.
// Within the async function, use await keyword to wait for a Promise to resolve before proceeding.
// Create a function that returns a Promise which resolves after some delay.
// Call the async function to showcase asynchronous behavior with await.

const delay = () => {
    console.log('delays......');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved');
        },5000)
    })
}

const displayPromise = async() => {
    console.log('waiting....');
    const res = await delay();
    console.log('response....', res);
}
displayPromise();


//tech mahindra interview questions url
// https://www.ambitionbox.com/interviews/tech-mahindra-interview-questions/front-end-developer?cvId