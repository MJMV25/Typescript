function suma(a:number, b:number){
    if(a <= 0 || b <= 0  ){
        throw new Error("los numeros deben ser mayores a 0")
    }
    return a + b 
}

const num1 = 5
const num2 = 10

const resultado = suma(num1,num2)

console.log(resultado)
