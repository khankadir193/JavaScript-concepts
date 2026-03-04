console.log('Bubble Sort');
function BubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};

const numbers = [40, 100, 1, 5, 25, 10];
console.log(BubbleSort(numbers)); // this is the use for tiny dataset.

// Insertion Sort is like sorting a deck of cards in your hands. You pick one card at a time and 
// "insert" it into its correct position among the cards you are already holding.
console.log('insertion sort');
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i-1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};

const data = [12, 11, 13, 5, 6];
console.log(insertionSort(data));

console.log('merge sort');
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}
const mergeS = [3,2,2,32,9,1,2,3,-1,0]
console.log(mergeSort(mergeS))

console.log('quick sort');

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const quickS = [53,2,6,8,5,3,3,3,2,2,8,454,4,54,54,54];

console.log(quickSort(quickS));

// which sorting is better quick sort or merge sort
// merge sort is a stable and time complexit is same but worst is onlogn is used for large data.
// quick sort is the is also good for array/internal sorting and worst case could be o(n) square.

// Merge Sort is better if you need guaranteed performance and stability (e.g., sorting a list of 
// users by name, then by age).
// Quick Sort is better if you are low on memory and working with arrays, as it is typically 
// faster in practice due to better cache locality.