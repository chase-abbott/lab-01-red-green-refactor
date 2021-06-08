

export default (arr) => {
  const newArray = [];

  for(let i = 0; i < arr.length; i++) {
    
    if(typeof arr[i] === 'string'){
     
      if(((arr[i][0] !== 'f') && (arr[i][0] !== 'F'))) {
        const capitalizedItem = arr[i].toUpperCase();
        newArray.push(capitalizedItem);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
