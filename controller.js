//Aplica mascara no campo CPF

let cpf = document.getElementById('cpf') .value;
function mascaraCPF() {
      if (cpf.value.lenght == 3) 



}	
//Iníco verificação de preenchimento de campos do formulário.
function verificar(){

var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var celular = document.getElementById("celular").value;
var cpf = document.getElementById("cpf").value;
var endereço = document.getElementById("endereco").value;
var número = document.getElementById("numero").value;
var bairro = document.getElementById("bairro").value;
var complemento = document.getElementById("complemento").value;


	if (!nome){
		alert("Campos não preenchidos, favor preenchê-los");
	} else{
		alert("Campos preenchidos com sucesso!");
	}
}