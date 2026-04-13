# JavaScript Concepts & Coding Problems

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)

## 📖 Overview
This repository is a comprehensive collection of **JavaScript fundamentals**, **advanced concepts**, and **coding interview problems** (LeetCode, GeeksforGeeks, etc.). Perfect for interview prep, learning DSA in JS, and exploring JS features.

- **~100+ files** with runnable examples (console.log outputs).
- Organized into root files, `DSACodingProblem/`, `InterviewCodingQues/`, `debounce/`, `throttle/`.
- Run with `node filename.js` or open HTML files in browser.

## 📂 Table of Contents

### 1. JavaScript Fundamentals
| File | Description |
|------|-------------|
| [Hoisting.js](Hoisting.js) | Variable/function hoisting behavior |
| [closure.js](closure.js), [closureExample.js](closureExample.js) | Closures with examples |
| [IIFEFunction.js](IIFEFunction.js) | Immediately Invoked Function Expressions |
| [thisKeyword.js](thisKeyword.js), [applyBindCallFun.js](applyBindCallFun.js) | `this`, call/apply/bind |
| [prototype.js](prototype.js) | Prototypes & inheritance |
| [typeCoercion.js](typeCoercion.js) | Type coercion examples |
| [passByValue.js](passByValue.js), [passByReference.js](passByReference.js) | Pass by value/reference |
| [arrayDestructring.js](arrayDestructring.js) | Array destructuring |
| [objectKeys.js](objectKeys.js) | Object methods |
| [SymbolDataType.js](SymbolDataType.js) | Symbols |
| [optionalChaining.js](optionalChaining.js) | Optional chaining |

### 2. Advanced JS Concepts
| File | Description |
|------|-------------|
| [InterviewPromiseExample.js](InterviewPromiseExample.js) | Promises (all, race, allSettled, any) |
| [polyfills.js](polyfills.js), [InterviewCodingQues/polyfills.js](InterviewCodingQues/polyfills.js) | Polyfills (filter, map, etc.) |
| [currying.js](currying.js) | Function currying |
| [debounce/dbounce.html](debounce/dbounce.html), [throttle/throttle.html](throttle/throttle.html) | Debounce & Throttle (HTML demos) |
| [memoization.js](memoization.js), [memoizationExample.js](memoizationExample.js) | Memoization techniques |
| [eventLoop.js](eventLoop.js) | Event loop |
| [deepCopy.js](deepCopy.js), [shallowCopy.js](shallowCopy.js) | Shallow vs deep copy |
| [throttling.js](throttling.js), [throttle.js](throttle.js) | Throttling |

### 3. DSA & Coding Problems
#### Arrays & Sorting
| File | Problem |
|------|---------|
| [DSACodingProblem/Sorting.js](DSACodingProblem/Sorting.js) | Bubble, Insertion, Merge, Quick Sort |
| [arrayReverse.js](arrayReverse.js) | Reverse array |
| [InterviewCodingQues/rotateArray.js](InterviewCodingQues/rotateArray.js) | Rotate array by k |
| [moveAllZeroEnd.js](moveAllZeroEnd.js), [InterviewCodingQues/moveAllZeroEnd.js](InterviewCodingQues/moveAllZeroEnd.js) | Move zeros to end |
| [reverseArrayInGroup.js](reverseArrayInGroup.js) | Reverse array in groups of k |

#### Strings
| File | Problem |
|------|---------|
| [isPalindrome.js](isPalindrome.js), [AnagramPalindrome.js](AnagramPalindrome.js), [PalindromeCheckComplex.js](PalindromeCheckComplex.js) | Palindrome checks |
| [anagram.js](anagram.js), [twoStringAnagram.js](twoStringAnagram.js) | Anagram detection |
| [Pangram.js](Pangram.js) | Check pangram |
| [Atoi.js](Atoi.js), [implementAtoi.js](implementAtoi.js) | String to integer (atoi) |
| [ReverseWords.js](ReverseWords.js) | Reverse words in string |

#### Data Structures
| File | Problem |
|------|---------|
| [DSACodingProblem/Stack.js](DSACodingProblem/Stack.js) | Stack implementation |
| [DSACodingProblem/Queue.js](DSACodingProblem/Queue.js) | Queue implementation |
| [DSACodingProblem/GraphQuestion.js](DSACodingProblem/GraphQuestion.js) | Find circle number (Union Find/Graph) |

#### Math/Numbers
| File | Problem |
|------|---------|
| [FizzBuzzExample.js](FizzBuzzExample.js) | FizzBuzz |
| [armStrongNumber.js](armStrongNumber.js) | Armstrong number |
| [largestPrimeFactor.js](largestPrimeFactor.js) | Largest prime factor |
| [AddingTwoBinary.js](AddingTwoBinary.js) | Add two binary strings |
| [missingNumber.js](missingNumber.js) | Missing number in array |

#### Other Problems
| File | Problem |
|------|---------|
| [InterviewCodingQues/firstUniqChar.js](InterviewCodingQues/firstUniqChar.js) | First unique character |
| [FirstNonRepeating.js](FirstNonRepeating.js) | First non-repeating char |
| [romanToInteger.js](romanToInteger.js) | Roman to integer |
| [isomorphic.js](isomorphic.js) | Isomorphic strings |
| [findCommonElements.js](findCommonElements.js) | Common elements in 3 sorted arrays |

**Full list**: Run `dir /s *.js` in terminal.

## 🚀 Usage

### Individual Files
1. Run examples: `node Hoisting.js` or `node DSACodingProblem/Sorting.js`.
2. HTML demos: Open `localStorage.html`, `debounce/index.html`, etc. in browser.

### 🧪 Run & Test All Files at Once
**`run-all.js`** runs **all .js files sequentially** (100+), prefixes outputs with filenames, handles errors.

```bash
node run-all.js
```

**Sample Output:**
```
📄 anagram.js
==================================================
true
false

📄 Hoisting.js
==================================================
undefined
The variable Has been hoisted
```

- Logs all `console.log` with file context.
- Skips `node_modules`/`.git`.
- **For other developers**: Quick overview of all examples/results + code explanations in files/README.
- Pure Node.js (no deps). Sequential to avoid output chaos.

**Pro Tip**: Pipe to file `node run-all.js > all-outputs.txt` for review.


## 🤝 Contributing
- Add new problems/concepts.
- Update with tests/performance notes.
- PRs welcome!

## 📚 Resources
- [interviewResources.txt](interviewResources.txt)
- GeeksforGeeks, LeetCode, NamasteDev links in code comments.

**Happy Coding! 🚀**

