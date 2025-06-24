// 1. Базовые функции для арифметических операций

// Функция для сложения двух чисел
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Функция для вычитания двух чисел
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// Функция для умножения двух чисел (дополнительное задание)
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Функция для деления двух чисел (дополнительное задание)
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Ошибка: деление на ноль!";
    }
    return num1 / num2;
}

// 2. Функция для генерации приветствия
function greetUser(name) {
    if (!name.trim()) {
        return "Пожалуйста, введите ваше имя!";
    }
    return `Привет, ${name}! Рады видеть вас!`;
}

// 3. Функция для вычисления суммы массива (дополнительное задание)
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 4. Стрелочная функция для проверки числа (дополнительное задание)
const isEven = num => num % 2 === 0;

// Обработчики событий

// Обработчик для кнопки сложения
document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = addNumbers(num1, num2);
    document.getElementById('arithmeticOutput').innerHTML = `
        Результат сложения: ${result}<br>
        Число ${result} ${isEven(result) ? 'чётное' : 'нечётное'}
    `;
});

// Обработчик для кнопки вычитания
document.getElementById('subtractBtn').addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = subtractNumbers(num1, num2);
    document.getElementById('arithmeticOutput').innerHTML = `
        Результат вычитания: ${result}<br>
        Число ${result} ${isEven(result) ? 'чётное' : 'нечётное'}
    `;
});

// Обработчик для кнопки умножения
document.getElementById('multiplyBtn').addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = multiplyNumbers(num1, num2);
    document.getElementById('arithmeticOutput').innerHTML = `
        Результат умножения: ${result}<br>
        Число ${result} ${isEven(result) ? 'чётное' : 'нечётное'}
    `;
});

// Обработчик для кнопки деления
document.getElementById('divideBtn').addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = divideNumbers(num1, num2);
    let output = `Результат деления: ${result}`;
    
    if (typeof result === 'number') {
        output += `<br>Число ${result} ${isEven(result) ? 'чётное' : 'нечётное'}`;
    }
    
    document.getElementById('arithmeticOutput').innerHTML = output;
});

// Обработчик для кнопки приветствия
document.getElementById('greetBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const greeting = greetUser(name);
    document.getElementById('greetingOutput').textContent = greeting;
});

// Обработчик для кнопки суммы массива
document.getElementById('sumArrayBtn').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',')
        .map(item => parseFloat(item.trim()))
        .filter(item => !isNaN(item));
    
    if (numbers.length === 0) {
        document.getElementById('arrayOutput').textContent = "Пожалуйста, введите корректные числа!";
        return;
    }
    
    const sum = sumArray(numbers);
    document.getElementById('arrayOutput').innerHTML = `
        Введённые числа: ${numbers.join(', ')}<br>
        Сумма чисел: ${sum}<br>
        Количество чисел: ${numbers.length}
    `;
});