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


function task_7(){
    let age = parseInt(prompt("Введите Ваш возраст: ", "возраст"));
    switch(age){
        case 18:
            alert("Вы соверешеннолетний, Вам все можно!");
            break;
        case 30:
            alert("Ложитесь спать, завтра на работу!");
            break;
        case 10:
            alert("Идите учить уроки!");
            break;
        default:
            alert("Мы не знаем, что Вам делать!");
            break;
    }
}