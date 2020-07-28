import React from 'react';
import Menu from './Components/Menu'

import dadosIniciais from '../src/data/dados_iniciais.json'
import BannerMain from '../src/Components/BannerMain';
import Carousel from '../src/Components/Carousel';
import Footer from '../src/Components/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />


      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />


    <Footer
      
    />
      
    </div>
  );
}

export default App;
