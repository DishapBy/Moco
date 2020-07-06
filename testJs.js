let f = [1,2,3,4,4,5,5,5,6];


let copyArray = (arr) => {
  let resArr = [];

  for(let a in arr){
      if(!arr.includes(a)){
          resArr.push(a)
      }
  }
  return resArr;
};


let b = copyArray(f);
console.log(b)
