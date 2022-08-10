const num =+ prompt("digite um numero")

//com ifs aninnhados
// não consegui pensar em como resolver isso com if aninhado, só se for divisivel pelos dois numeros, por um ou outro não consegui
// pra fazer com ou, o primeiro if aninhado vai realmente funcionar como um &&, eu tenho que fazer um cofigo usando else if tbm pra mostrar todas as possibilidades
/*if (num % 2 === 0){
    if(num % 3 === ){
        

    }
}*/

// com operador logico

if (num % 2 === 0 || num % 3 === 0){
    console.log(" o numero é divisivel por 2 ou 3")
}


