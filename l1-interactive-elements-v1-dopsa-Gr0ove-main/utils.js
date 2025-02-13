// utils.js

const validateEquation = (equation) => {
    if (!equation) {
      return "Не хватает одного или нескольких операндов";
    }
  
    if (/[^0-9+\-*/]/.test(equation)) {
      if (/[a-zA-Zа-яА-ЯёЁ]/.test(equation)) {
        return "Операнды могут быть только числами";
      } else {
        return "В выражении должны использоваться только операторы +, -, /, *";
      }
    }
  
    if (!/[+\-*/]/.test(equation)) {
      return "Не хватает одного или нескольких операндов";
    }
  
    for (let i = 0; i < equation.length; i++) {
      if (/[+\-*/]/.test(equation[i])) {
        if (i === 0 || i === equation.length - 1) {
          return "Не хватает одного или нескольких операндов";
        }
  
        const prevChar = equation[i - 1];
        const nextChar = equation[i + 1];
  
        if (isNaN(Number(prevChar)) || isNaN(Number(nextChar))) {
          return "Операнды могут быть только числами";
        }
      }
    }
  
    return "";
  };
  
  const calcEquation = (equation) => {
    const validationError = validateEquation(equation);
    if (validationError) {
      return "";
    }
  
    try {
      const result = eval(equation.replace(/\/0/g, '/1'));
      return String(result);
    } catch (error) {
      return "";
    }
  };
  
  export { validateEquation, calcEquation };