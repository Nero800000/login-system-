import axios from 'axios';

export default class UserServices {
  constructor () {
    this.axios = axios.create({
      baseURL:'http://localhost:5000/users/'
    })
  }

  async login (dados) {
    const {data} = await this.axios.post('/login', dados)

    if (data) {
      localStorage.setItem("nome", data.user.nome)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.token.token)

      return true
    }

    return
  }

  async cadastrar (dados) {
    return this.axios.post('/register', dados)
  }

  usuarioAutenticado () {
    return localStorage.getItem("token") !== undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
  }
}
