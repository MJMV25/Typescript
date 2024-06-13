function showSDay(day:string){

    switch(day) {
        case "lunes":
        console.log("Es Lunes");
        
    break;
    case "martes":
        console.log("Es martes");
        break;

        case "miercoles":
            console.log("Es miercoles")
        break;
             
    break;
    case "jueves":
        console.log("Es jueves");
        break;
             
    break;
    case "viernes":
        console.log("Es viernes");
        break;
             
    break;
    case "Sabado":
        console.log("Es sabado");
        break;
             
    break;
    case "Domingo":
        console.log("Es domingo");
        break;
        default:
            throw new Error("dia no valido")
    }
}