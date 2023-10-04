import "./cadastro.css";
import mercado from "../../images/icone-mercado.svg";
import trator from "../../images/icone-trator.svg";
import retorno from "../../images/icone-retorno.svg";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useState} from "react";
import { useNavigate } from "react-router-dom";



function Cadastro() {

  const navigate = useNavigate();
  const [titulo, setName] = useState()

  function changeName(ev) {
    setName(ev.target.value)
  }
  
  
  const [email, setEmail] = useState()
  
  function changeEmail(ev) {
    setEmail(ev.target.value)
  }
  
  const [senha, setSenha] = useState()
  
  function changeSenha(ev) {
    setSenha(ev.target.value)
  }
  
  const post = () => {
    axios.post('http://localhost:5000/cadastro/',{
      "nome": titulo,
      "email": email,
      "senha": senha
    },)
    .then(navigate("/cadastro/cadastro-realizado"))
    }


  return (
    <div id="container">
      <form onSubmit={post}>
      <Link to="/">
      <img src={retorno} alt="" id="return" />
      </Link>

        <h1>Cadastre-se</h1>
        <label htmlFor="">Nome:</label>
        <input type="text" id="name" placeholder="insira seu nome" name="nome" onChange={(ev) => changeName(ev)}/>
        <label htmlFor="">E-mail:</label>
        <input type="text" id="name" placeholder="insira seu e-mail" name="nome" onChange={(ev) => changeEmail(ev)}/>
        <label htmlFor="">Senha: </label>
        <input type="text" id="name" placeholder="insira sua senha" name="nome" onChange={(ev) => changeSenha(ev)}/>
        <button type="submit">Cadastrar</button>
      </form>
      <footer>
        <img src={mercado} alt="" className="icons" />
        <img src={trator} alt="" className="icons" />
      </footer>
    </div>
  );
}

export default Cadastro;
