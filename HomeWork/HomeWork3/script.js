function task_1(){
    alert("Привет, мир!");
}


function task_2(){
    // var const let
    let num1 = parseInt(prompt("Введите 1-ое число: "));
    let num2 = parseInt(prompt("Введите 2-ое число: "));
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}


function task_3(){
    let name = prompt("Введите имя: ", "Имя");
    alert(`Привет, ${name}!`);
}


function task_6(){
    // if (confirm("Вы уверены?"))
    //     alert("Мы рады, что Вы уверены!");
    // else
    //     alert("Жаль, что Вы не уверены!");
    let ans = (confirm("Вы уверены?")) ? alert("Мы рады, что Вы уверены!") : 
    alert("Жаль, что Вы не уверены!");
}


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