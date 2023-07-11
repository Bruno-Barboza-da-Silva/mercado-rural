import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Produto from "./pages/produto/produto"
import Cadastro from "./pages/cadastro/cadastro"
import Entrar from "./pages/entrar/entrar"
import CadastrarProduto from "./pages/cadastro-produto/cadastrar-produto"
import SeusAnuncios from "./pages/seus-anuncios/seus-anuncios"
import Erro from "./pages/erro/erro"
import Sair from "./pages/sair/sair"
import EditarCadastro from "./pages/editar-cadastro/editar-cadastro"
import EditarAnuncio from "./pages/seus-anuncios/editar-anuncio/editar-anuncio";
import RecuperarSenha from "./pages/entrar/recuperar-senha/recuperar-senha"
import EnvioSenha from "./pages/entrar/recuperar-senha/envio/envio"
import CadastroRealizado from "./pages/cadastro/cadastro-realizado/cadastro-realizado"
import ExcluirAnuncio from "./pages/seus-anuncios/excluir/excluir-anuncio"
import ProdutoCadastrado from "./pages/cadastro-produto/produto-cadastrado/produto-cadastrado"
import Compra from "./pages/produto/compra/compra"
import Avalie from "./pages/produto/compra/avalie/avalie"
import AvaliacaoRealizada from "./pages/produto/compra/avalie/avaliacao-realizada/avaliacao-realizada"
import EdicaoRealizada from "./pages/seus-anuncios/editar-anuncio/edicao-realizada/edicao-realizada";
import AnuncioExcluido from "./pages/seus-anuncios/excluir/anuncio-excluido/anuncio-excluido";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/produto/:id/compra" element={<Compra />} />
      <Route path="/produto/:id/compra/avalie" element={<Avalie />} />
      <Route path="/produto/:id/compra/avaliacao-realizada" element={<AvaliacaoRealizada />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastro/cadastro-realizado" element={<CadastroRealizado />} />
      <Route path="/entrar" element={<Entrar />} />
      <Route path="/entrar/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/entrar/recuperar-senha/envio" element={<EnvioSenha />} />
      <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
      <Route path="/cadastrar-produto/produto-cadastrado" element={<ProdutoCadastrado />} />
      <Route path="/seus-anuncios" element={<SeusAnuncios />}/>
      <Route path="/seus-anuncios/editar" element={<EditarAnuncio />} />
      <Route path="/seus-anuncios/editar/edicao-realizada" element={<EdicaoRealizada />} />

      <Route path="/seus-anuncios/excluir" element={<ExcluirAnuncio />} />
      <Route path="/seus-anuncios/excluir/anuncio-excluido" element={<AnuncioExcluido />} />

      <Route path="sair" element={<Sair />} />
      <Route path="editar-cadastro" element={<EditarCadastro />} />
      <Route path="*" element={<Erro />} />

    </Routes>
  );
}

