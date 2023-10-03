import "./cadastro.css";
import mercado from "../../images/icone-mercado.svg";
import trator from "../../images/icone-trator.svg";


function Cadastro() {
  return (
    <div id="container">
      <form action="">
        <h1>Cadastre-se</h1>
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">E-mail:</label>
        <input type="email" />
        <label htmlFor="">Senha: </label>
        <input type="password" />
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
