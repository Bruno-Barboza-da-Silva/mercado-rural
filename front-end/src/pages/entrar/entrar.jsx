import "./entrar.css";
import mercado from "../../images/icone-mercado.svg";
import trator from "../../images/icone-trator.svg";
import { Link } from "react-router-dom";

function Entrar() {
  return (
    <div id="container">
      <form action="">
        <h1>Entrar</h1>
        <label htmlFor="">E-mail:</label>
        <input type="email" />
        <label htmlFor="">Senha: </label>
        <input type="password" />
        <Link to="/entrar/recuperar-senha" className="esqueceu-senha">Esqueceu sua senha?</Link>
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
