//first question
// let x = 1;

// let y = x++ + ++x;

// console.log(y);
// console.log(x);

// second question
// let x = 5;
// console.log(x++ + x++);

//third question
// let x = 0;
// console.log(++x); //1
// console.log(x++); // 1

// or

// let x = 0;
// console.log(x++); // 0
// console.log(++x); // 2

//fourth question
let x = 3;
let y = ++x + x++ + ++x;
console.log(y); // 14
console.log(x); // 6

//nullish coelsing operator 
const count = 0;
const result = count || 10;
console.log('without nullish coelcing operator',result);
const fixed = count ?? 0; // here nullish coelcing operator only check null/undefined values.
console.log('nullish coelcing operator...',fixed);

//real world problem
const user = {profile:{name:'abdul kadir khan'}};
console.log(user.profile?.city ?? 'unknown city')

//comma operator :-Comma operator evaluates all values and returns the last one.
//ques1
const ca = (1,2,3);
console.log(ca)

//ques2 medium
let a = 5;
let b = (a++, a + 10);
console.log(b);
console.log(a);

// explanation:-a++ → returns 5, but a becomes 6
// a + 10 → 6 + 10 = 16

// ques3-hard
for (let i = 0, j = 5; i < 3; i++, j--) {
  console.log(i, j);
}

// output:-
// 0 5
// 1 4
// 2 3
// 🧠 Important Interview Tip
// The comma operator:
// Is rarely used in real projects
// Common in tricky interview questions
// Mostly seen in for loops


//delete operator 
//ques:1
// let ageK = 20; 
// nameK = 'kadir'
// console.log(delete ageK);
// console.log(delete nameK);

// // ques:2
// var fv = 10;
// let sv = 20;

// console.log(window.fv); //it will add to global var
// console.log(window.sv); // this the local var so it will not window obj.

