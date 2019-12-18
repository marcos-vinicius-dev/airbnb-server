"use strict"

const User = use("App/Models/User") //importando o modelo de usuario

class UserController {
  async create ({ request }) {//Definimos um novo método assíncrono create que recebe um parâmetro request que possui todos dados da requisição como parâmetros, corpo, headers, etc. Veja que estamos utilizando {} por volta dos parâmetros, isso porque no AdonisJS utilizamos a desestruturação do ES6 no controller;
    const data = request.only(["username", "email", "password"])//Buscamos os campos de username, email e password do corpo da nossa requisição e os armazenamos em um objeto chamado data;

    const user = await User.create(data)//Criamos um novo usuário repassando os parâmetros vindos da requisição e salvamos esse novo usuário em uma variável user;

    return user//Retornamos o novo usuário como resultado da requisição, como selecionamos, no nosso caso o retorno será um JSON.
  }
}

module.exports = UserController