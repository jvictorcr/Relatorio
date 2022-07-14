const form = document.getElementById('form')
const username =document.getElementById('username')
const sobrenome =document.getElementById('sobrenome')
const cpf =document.getElementById('cpf')
const endereco =document.getElementById('endereco')
const celular =document.getElementById('celular')
const email =document.getElementById('email')

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const sobrenomeValue = sobrenome.value;
  const cpfValue = cpf.value;
  const enderecoValue = endereco.value;
  const celularValue = celular.value;
  const emailValue = email.value;

  if (usernameValue ==="") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }
  if (sobrenomeValue === "") {
    setErrorFor(sobrenome, "O sobrenome de usuário é obrigatório.");
  } else {
    setSuccessFor(sobrenome);
  }
  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");
  } else if (cpfValue.length < 11) {
    setErrorFor(cpf, "O CPF precisa ter 11 números.");
  } else {
    setSuccessFor(cpf);
  }
  if (enderecoValue === "") {
    setErrorFor(endereco, "O endereço é obrigatório.");
  } else {
    setSuccessFor(endereco);
  }
  if (celularValue === "") {
    setErrorFor(celular, "O número de celular é obrigatório.");
  } else if (celularValue.length < 11) {
    setErrorFor(celular, "O número é inválido.");
  } else {
    setSuccessFor(celular);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido!@gmail.com");
  } else {
    setSuccessFor(email);
  }
  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
   let resposta = confirm("Deseja mesmo enviar esse formulário?")
   if(resposta == true){
    alert("Formulário enviado!!!")
   }else{
    alert("Envio cancelado!!!")
   }
  }
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}