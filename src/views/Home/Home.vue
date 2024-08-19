<template>
  <div id="Home" class="Home">
    <header>
      <div class="first-line">
        <img src="@/assets/styles/img/logo.png" alt="logo" class="logo">
        <ul class="top-menu">
          <li><router-link to="/" class="a">Home</router-link></li>
          <li><router-link to="/categorias" class="a">Categorias</router-link></li>
          <li><router-link to="/colecoes" class="a">Coleções</router-link></li>
        </ul>
        <router-link to="/login" class="login-button a">Login</router-link>
      </div>
      <div class="top-left">
        <p id="slogan">Comece Uma Incrível <span class="destaque-amarelo">Aventura</span> Investindo Em Um Livro Hoje.
        </p>
        <p id="welcome">Bem-vindo à nossa livraria! Cada livro que você compra não é apenas uma história, é um
          passaporte para novos mundos, aventuras emocionantes e possibilidades infinitas. Entre em nossa coleção
          selecionada, repleta de histórias aguardando para serem descobertas.</p>
        <div class="search-wrapper">
          <span class="search-container">
            <i class="fa fa-search"></i>
            <input type="text" id="query" placeholder="Encontre seu novo livro aqui..." class="search-input"
              name="query">
          </span>
          <form action="resultado-busca.html" method="GET" @submit.prevent="handleSearch">
            <button type="submit" class="search-button">Buscar</button>
          </form>
        </div>
      </div>
    </header>
    <main>
      <div class="selection">
        <h1 class="inline-element">Lançamentos</h1>
        <p class="inline-element">Ver todos</p>
      </div>
      <div class="carousel">
        <div class="carousel-wrapper" ref="launchResults">
          <div v-for="(book, index) in searchBook.launchBooks" :key="index">
            <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''" alt="Book cover"
              class="slider-img">
          </div>
        </div>
        <button class="carousel-button left" @click="sliderScrollLeft('launchResults')">&lt;</button>
        <button class="carousel-button right" @click="sliderScrollRight('launchResults')">&gt;</button>
      </div>
      <div class="selection">
        <h1 class="inline-element">Mais Vendidos</h1>
        <p class="inline-element">Ver todos</p>
      </div>
      <div class="carousel">
        <div class="carousel-wrapper" ref="bestSellerResults">
          <div v-for="(book, index) in searchBook.bestSellerBooks" :key="index">
            <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''" alt="Book cover"
              class="slider-img">
          </div>
        </div>
        <button class="carousel-button left" @click="sliderScrollLeft('bestSellerResults')">&lt;</button>
        <button class="carousel-button right" @click="sliderScrollRight('bestSellerResults')">&gt;</button>
      </div>
      <!-- <div class="selection">
        <h1 class="inline-element">Categorias</h1>
        <p class="inline-element">Ver todos</p>
      </div>
  
  <div>
    <ul class="nav-list">
      <li><router-link to="/categorias" class="a">Todas</router-link></li>
      <li><router-link to="/categorias#fiction" class="a">Ficção</router-link></li>
      <li><router-link to="/categorias#history" class="a">História</router-link></li>
      <li><router-link to="/categorias#philosophy" class="a">Filosofia</router-link></li>
      <li><router-link to="/categorias#biography" class="a">Biografia</router-link></li>
    </ul>
    <div id="results"></div>
  </div> -->
  </main>
  <footer>
    <div class="footer-content">
      <div class="footer-section about">
        <h3>Sobre Nós</h3>
        <p>A Livraria Daura é sua fonte confiável para uma ampla seleção de livros. Desde clássicos atemporais até os
          mais recentes lançamentos, temos algo para todos os amantes da leitura.</p>
      </div>
      <div class="footer-section links">
        <h3>Links Rápidos</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/categorias">Categorias</router-link></li>
          <li><router-link to="/colecoes">Coleções</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h3>Contato</h3>
        <p>Rua dos Livros, 123, Cidade, Estado, 45678-000</p>
        <p>Email: contato@livrariadaura.com.br</p>
        <p>Telefone: (11) 1234-5678</p>
        <div class="socials">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Livraria Daura. Todos os direitos reservados.</p>
    </div>  
  </footer>
  </div>
</template>

<script>
import { useSearchBook } from '../../stores/searchBook';

export default {
  name: 'Home',
  setup() {
    const searchBook = useSearchBook();

    searchBook.fetchBooks("romance", 'launch');
    searchBook.fetchBooks("mais vendidos", 'bestSeller');

    return { searchBook };
  },
  methods: {
    sliderScrollLeft(refName) {
      const slider = this.$refs[refName];
      if (slider) {
        this.searchBook.sliderScrollLeft(slider);
      }
    },
    sliderScrollRight(refName) {
      const slider = this.$refs[refName];
      if (slider) {
        this.searchBook.sliderScrollRight(slider);
      }
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
@import './Home.scss';
</style>