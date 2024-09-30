import React from "react";
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="page-title"></h1>

      <h2 className="section-title pt-title">Sobre </h2>
      <p className="about-text">
        Lil Digs, 25 anos, é um artista de trap da Zona Oeste de São Paulo que
        está trazendo uma nova vibe para o cenário underground. Fazendo música
        há 1 ano, ele já lançou várias faixas no SoundCloud, onde mistura
        batidas marcantes com letras que exploram suas emoções e reflexões. Sem
        seguir fórmulas, Lil Digs está criando seu próprio caminho no trap, com
        um som que conecta tanto pela autenticidade quanto pela sensibilidade.
      </p>

      <h2 className="section-title en-title">About</h2> {/* Corrigido para exibir "About" */}
      <p className="about-text">
    
      </p> {/* Adicionado conteúdo em inglês */}
    </div>
  );
};

export default About;
