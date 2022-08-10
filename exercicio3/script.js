//código a ser reescrito
const nome = prompt ("qual o seu nome")
const idade = prompt ("qual a sua idade")

/*if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}*/

// codigo com if ternario
//codigo A)

nome === "José" ? console.log("Olá Zé!") : console.log(`Oi ${nome}`)

// código B)

idade >= 18 ? console.log("Pode tirar CNH") : console.log("não pode tirar CNH")