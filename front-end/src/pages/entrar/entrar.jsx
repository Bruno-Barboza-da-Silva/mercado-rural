import "./entrar.css";
import mercado from "../../images/icone-mercado.svg";
import trator from "../../images/icone-trator.svg";

function Entrar() {
  return (
    <div id="container">
      <form action="">
        <h1>Entrar</h1>
        <label htmlFor="">E-mail:</label>
        <input type="email" />
        <label htmlFor="">Senha: </label>
        <input type="password" />
        <button type="submit">Entrar</button>
      </form>
      <footer>
        <img src={mercado} alt="" className="icons" />
        <img src={trator} alt="" className="icons" />
      </footer>
    </div>
  );
}

export default Entrar;
