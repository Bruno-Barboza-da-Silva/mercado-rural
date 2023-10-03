import "./cadastro-produto.css";
import mercado from "../../images/icone-mercado.svg";
import trator from "../../images/icone-trator.svg";
import retorno from "../../images/icone-retorno.svg";
import { Link } from "react-router-dom";


function CadastrarProduto() {
  return (
    <div id="container">
      <form action="">
      <Link to="/">
      <img src={retorno} alt="" id="return" />
      </Link>

        <h1>Cadastrar produto</h1>
        <label htmlFor="">Produto:</label>
        <input type="text" />
        <label htmlFor="">Preço: </label>
        <input type="text" />
        <label htmlFor="">Imagens: </label>
        <input type="text" />
        <label htmlFor="">Descrição: </label>
        <input type="text" />
        <button type="submit">Cadastrar</button>
      </form>
      <footer>
        <img src={mercado} alt="" className="icons" />
        <img src={trator} alt="" className="icons" />
      </footer>
    </div>
  );
  }
  
  export default CadastrarProduto;
