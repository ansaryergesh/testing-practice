const arrayAnalysis = (arr) => {
  const result = {
    average: arr.reduce((previous, currrent) => previous + currrent) / arr.length, 
    min: Math.min(...arr), 
    max: Math.max(...arr), 
    length: arr.length, 
};
  
  return result;
};

export default arrayAnalysis;