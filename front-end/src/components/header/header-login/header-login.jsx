import { Link } from "react-router-dom";
import mercado from "../../../images/icone-mercado.svg";
import trator from "../../../images/icone-trator.svg";
import "./header-login.css";

function HeaderLogin() {
  return (
    <>
      <header>
        <div id="logo-esquerda">
          <img src={mercado} alt="" className="icons" />
          <h1>Mercado Rural</h1>
        </div>
        <div id="logo-direita">
          <div id="buttons">
            <button className="buttons">Usuário</button>
            <Link to="" className="buttons">
              {" "}
              Anunciar
            </Link>
          </div>
          <img src={trator} alt="" className="icons" />
        </div>
      </header>
      <div id="cotacoes">
        <p>Cotações do dia: </p> 
        <p className="precos">Alface(18und): max. R$10,00 | min. R$6,00 | ult. R$9,00 | méd. R$7,00</p>
        <p className="precos">Alface(18und): max. R$10,00 | min. R$6,00 | ult. R$9,00 | méd. R$7,00</p>
      </div>
    </>
  );
}

export default HeaderLogin;
