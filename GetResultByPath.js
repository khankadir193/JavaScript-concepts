function getResultByPath(path, obj) {
  //write your implementation here
//   console.log('path..',path.split('.'));

  path.split('.').forEach(element => {
    console.log('...',obj[element]);    
  });

//   console.log(obj)
};

const path = "data.results.status";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}

console.log('',getResultByPath(path,obj));