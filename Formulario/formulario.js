function Enviar(){
let nomeUsuario = document.getElementById('nome').value
let emailUsuario = document.getElementById('email').value
let senhaUsuario = document.getElementById('senha').value
let data = document.getElementById('data').value

let UsuarioSentimento = document.querySelector("input[name='sentimento'] : checked").value

alert('Seu nome é: ' + nomeUsuario + '\n'
+ 'Seu email é: ' + emailUsuario + '\n'
+ 'Sua senha foi registrada!' + senhaUsuario + '\n' 
+ 'A data de hoje é: ' + data + '\n'
+ 'Você está se sentindo assim hoje: ' + UsuarioSentimento)

}