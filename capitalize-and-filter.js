

export default (arr) => {
  const filteredArray = arr.filter(item => {
    return ((item[0] !== 'f') && (item[0] !== 'F'));
  });

  const newArray = filteredArray.map(item => {

    if(typeof item === 'string') return item.toUpperCase();

    return item;
  });

  return newArray;
};
