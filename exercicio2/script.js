let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

// com switch case

switch (nacionalidade){
    case "brasileira":
    case "brasileiro":    
        console.log ("a pessoa é do Brasil")
        break;
    case "argentina":
    case "argentino":    
        console.log("a pessoa é da Argentina")
        break;
    case "uruguaia":
    case "uruguaio":    
        console.log (" apessoa é do Uruguai")
        break;
    case "chilena":
    case "chileno":    
        console.log("a pessoa é do Chile")
        break;
    case "colombiana":
    case "colombiano":    
        console.log ("a pessoa é da colombia")
        break;
    default:
        console.log("Nacionalidade não encontrada")    

}