const preschoolAdd = (num1, num2) => {
    const number = num1 + num2;
    if (number <= 0) return number;
    if (number > 10) return 'sok';
      
    return Math.floor(number);
}

// export default preschoolAdd;
module.exports = preschoolAdd;