# JavaScript Concepts & DSA Coding Practice (Node.js + Browser Demos)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)
[![DSA](https://img.shields.io/badge/DSA-Coding%20Problems-blue)](https://www.geeksforgeeks.org/dsa-gq/) 

A practical collection of **JavaScript fundamentals**, **advanced language concepts**, and **interview-ready coding problems**.

✅ Cleanly organized by topic/folder

✅ Runnable examples (Node.js) + small browser demos (HTML)

✅ One-command runner to execute the whole repo sequentially

---

## Why this repo (recruiter-friendly)
This project demonstrates:

- Strong JavaScript fundamentals (scope, closures, hoisting, prototypes, `this`, async patterns)
- Modern JS techniques (currying, memoization, polyfills, optional chaining patterns)
- Interview-ready problem solving (arrays, strings, math, data structures)
- Engineering practicality (a runner script that executes examples in a predictable order)

---

## Quick start

### Requirements
- Node.js **18+**

### Run everything (sequential)
The repo includes a runner that discovers every `.js` file and executes them **one-by-one**.

```bash
node run-all.js
```

What it does:
- Recursively scans the project for `*.js`
- Spawns `node <file>` for each script
- Streams `stdout`/`stderr` with a filename header
- Runs sequentially to prevent output interleaving

---

## How to explore the code

### Run an individual example
```bash
node Hoisting.js
node DSACodingProblem/Sorting.js
node InterviewCodingQues/firstUniqChar.js
```

### Browser demos
Some folders include HTML pages. Open them directly in a browser:
- `localStorage.html`
- `debounce/index.html`
- `throttle/index.html`

(These are lightweight UI demos for async behavior concepts like debounce/throttle.)

---

## Project structure

| Folder / Area | What you’ll find |
|---|---|
| Root (`*.js`) | Core JavaScript concepts and standalone coding examples |
| `DSACodingProblem/` | Sorting, Stack, Queue, and graph-related coding exercises |
| `InterviewCodingQues/` | Interview-style problems (strings/arrays/edge cases) |
| `last_Round_JS_Practice/` | Extra JS practice tasks (promises, cloning, polyfills, etc.) |
| `debounce/` | Debounce concept + HTML demo |
| `throttle/` | Throttle concept + HTML demo |

---

## Topic map (browse by concept)

### JavaScript fundamentals & language behavior
- Hoisting: `Hoisting.js`
- Closures: `closure.js`, `closureExample.js`
- IIFE: `IIFEFunction.js`
- `this`, `call/apply/bind`: `thisKeyword.js`, `applyBindCallFun.js`
- Prototypes: `prototype.js`, `prototypeExample.js`
- Async/event loop concepts: `eventLoop.js`

### Data handling & utilities
- Shallow vs deep copy: `shallowCopy.js`, `deepCopy.js`, `DeepNestedArray.js`
- Object/array utilities: `objectKeys.js`, `arrayDestructring.js`, `arrayReverse.js`
- Function patterns: `currying.js`, `memoization.js`, `throttle.js`, `throttling.js`

### DSA & interview practice (examples)
- Sorting: `DSACodingProblem/Sorting.js`
- Stack/Queue: `DSACodingProblem/Stack.js`, `DSACodingProblem/Queue.js`
- Common array problems: move zeros, rotation, grouping, max/min variants
- String problems: palindrome/anagram/isomorphic/pangram patterns

> Note: The best way to see the breadth is to run `node run-all.js`, which prints file-by-file outputs.

---

## Runner details (what makes this repo practical)
`run-all.js` is designed for learning and review:

- **Deterministic execution:** sequential run prevents output mixing.
- **Discoverable:** it auto-detects `.js` files recursively.
- **Readable output:** each file is wrapped with a header like `📄 <filename>`.

---

## Contributing
Contributions are welcome.

- Add new examples under root or appropriate folders
- Keep scripts runnable with `node <file>.js`
- If adding new UI demos, add them to README under the “Browser demos” section
- Prefer small, focused files that demonstrate one concept/problem

---

## Maintenance notes
- This repo is a learning playground. Many files log to the console as the primary output.
- If a script is intended for browser usage, it should be referenced from README with the correct relative path.

---

## Resources
- See `interviewResources.txt`

---

### Happy coding 🚀

