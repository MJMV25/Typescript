type Myunion = {
    name:string
    age:number
}|{
    email:string
    phone:string
   }

   let x: Myunion = {name: "samuel",age:17}
   x={email:"sgomez_193@cue.edu.co",phone:"3002723984"}