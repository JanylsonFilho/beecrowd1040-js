<script>

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt=function(texto){return lines.shift();};
var [n1,n2,n3,n4]=prompt("informe o valor das notas:").split(" ").map(Number);
var media=((n1*2)+(n2*3)+(n3*4)+(n4*1))/10;
console.log("Media: "+ media.toFixed(1));
if (media>=7) {
    console.log("Aluno aprovado.");
} 
    else if(media>=5){
    console.log("Aluno em exame.");
    var notex=Number(prompt("Digite a nota do exame:"));
    console.log("Nota do exame: "+notex.toFixed(1));
    var media2=(media+notex)/2;
  if (media2>=5) {
        console.log("Aluno aprovado.");
}else {
    console.log("Aluno reprovado.");
   }
   console.log("Media final: "+media2.toFixed(1))
 } else{
    console.log("Aluno reprovado.")
}

    </script>