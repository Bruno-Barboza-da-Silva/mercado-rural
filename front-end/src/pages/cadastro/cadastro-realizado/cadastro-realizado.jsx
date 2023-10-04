import "./cadastro-realizado.css";
import retorno from "../../../images/icone-retorno.svg";
import { Link } from "react-router-dom";

function CadastroRealizado() {
  return (
    <div className="cadastro">
      <h1 className="cadastro">Cadastro relizado com sucesso!</h1>
      <Link to="/" className="cadastro">
        <img src={retorno} alt="" id="return" className="cadastro" />
        <p className="cadastro">Voltar para a página inicial</p>
      </Link>
    </div>
  );
}

export default CadastroRealizado;
