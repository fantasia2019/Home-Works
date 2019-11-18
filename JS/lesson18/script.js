/* 1.Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе
выведите 'Неверно'.
Проверьте работу скрипта при a, равном '1', 1, 3.
*/

let a = '1';
if (a === '1'){
    console.log('Верно');   // Верно
} else {
    console.log('Неверно');
}

// Проверка

let р = 1;
if (р === 1){
    console.log('Верно');   // Верно
} else {
    console.log('Неверно');
}

let к = 3;
if (к === 3){               // Верно
    console.log('Верно');
} else {
    console.log('Неверно');
}


/* 2. Если переменная item не равна true, то выведите "Верно", иначе выведите "Неверно";.
Проверьте работу скрипта при item, равном true, false. Напишите два варианта скрипта - с короткой записью
и с длинной.
*/

console.log( 'item' != true ); //true
console.log( 'item' == true ); //false
console.log( 'item' == false ); //false


let item = true;
if (item != true){
    console.log('Верно');
} else {
    console.log('Неверно');
}


let result = (item != true )? 'Верно' : 'Неверно';


/* 3. Если переменная b больше нуля и меньше 4-ти, то выведите 'Верно', иначе выведите
'Неверно'.
Проверьте работу скрипта при b, равном 4, 0, -3, 2.
*/

let b = prompt ('Введите число');
if (b >= 4 ){
    console.log('Неверно');    
}else if(b <= 0 ){
    console.log('Неверно');    
}else{
    console.log('Верно');
}

/* Такий варіант можна використовувати ?????????????????????????????????????

let b = prompt ('Введите число');
if ( 0 < b < 4 ){
    console.log('Верно');    
}else{
    console.log('Неверно');    
}
*/

// Проверка

let c=4;
if (c >= 4 ){                    // Неверно
    console.log('Неверно');    
}else if(c <= 0 ){
    console.log('Неверно');    
}else{
    console.log('Верно');
}


let d=0;
if (d >= 4 ){
    console.log('Неверно');    
}else if(d <= 0 ){              // Неверно
    console.log('Неверно');    
}else{
    console.log('Верно');
}



let e=-3;
if (e >= 4 ){
    console.log('Неверно');    
}else if(e <= 0 ){              // Неверно 
    console.log('Неверно');     
}else{
    console.log('Верно');
}


let m=2;
if (m >= 4 ){
    console.log('Неверно');    
}else if(m <= 0 ){
    console.log('Неверно');    
}else{                          // Верно
    console.log('Верно');
}


/* 4. Если переменная l больше 3-х и меньше 12-ти, или переменная v больше или равна 7-
и и меньше 15-ти, то выведите 'Верно', в противном случае выведите "Неверно".
*/

let l = prompt ('Введите число');
let v = prompt ('Введите число');
if ( 3 < l < 12 || 7 >= v < 15 ){
    console.log('Верно');    
}else{
    console.log('Неверно');
}


/* 5. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую
пору года попадает этот месяц (зима, лето, весна, осень).
*/

let month = prompt ('Введите число от 1 до 12');
if (2 < month < 6 ){
    console.log('Spring');    
}else if(5 < month < 9 ){
    console.log('Summer');   
}else if(8 < month <12 ){
    console.log('Autumn');     
}else{
    console.log('Winter');
}


// намагалася зробити через ++, нічого не вийшло. Чи такий запис взагалі недопустимий????????????????

/*
for (let a=0; a<12; a++){

if (2 < a < 6 ){
    console.log('Spring');    
}else if(5 < a < 9 ){
    console.log('Summer');   
}else if(8 < a <12 ){
    console.log('Autumn');     
}else{ 
    console.log('Winter');
}
} 

/*


/*6. Выведите в консоли столбец четных чисел в промежутке от 0 до 100. (используя for или while)
*/

let r;
for( r = 2; r < 100; r++){
    if (r % 2 == 0) {
        console.log(r);
    }
}


let number = 0;
while( number < 100){
    if (number % 2 == 0) {
    console.log(number); 
    number++;
    }
}


