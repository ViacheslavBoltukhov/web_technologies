function calculator(){
    let first_number = parseInt(prompt("Введите первое число: ", "первое число"));
    let second_number = parseInt(prompt("Введите второе число: ", "второе число"));
    let operation = prompt("Введите математическую операцию: ", "операция: +, -, *, /");
    switch(operation){
        case '+':
            alert(`${first_number} + ${second_number} = ${first_number + second_number}`);
            break;
        case '-':
            alert(`${first_number} - ${second_number} = ${first_number - second_number}`);
            break;
        case '*':
            alert(`${first_number} * ${second_number} = ${first_number * second_number}`);
            break;
        case '/':
            alert(`${first_number} / ${second_number} = ${first_number / second_number}`);
            break;
        default:
            alert("Недопустимая операция!");
            break;
    }
}