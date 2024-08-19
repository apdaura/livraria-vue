<template>
    <div id="Dashboard" class="Dashboard">
      <header>
        <div class="first-line">
          <img src="@/assets/styles/img/logo.png" alt="logo" class="logo">
          <ul class="top-menu">
            <li><router-link to="/" class="a">Home</router-link></li>
            <li><router-link to="/categorias" class="a">Categorias</router-link></li>
            <li><router-link to="/colecoes" class="a">Coleções</router-link></li>
          </ul>
          <router-link to="/login" class="login-button">Sair</router-link>
        </div>
      </header>
      <main>
        <div class="welcome-section">
          <h1>Bem-vindo de volta, <span class="username">Admin</span>!</h1>
          <p class="intro-text">Estamos felizes em reve-lo. Trouxemos algumas novidades e recomendações pra você .</p>
        </div> 
        <div class="selection">
        <h1 class="inline-element">Novidades</h1>
        <p class="inline-element">Ver todos</p>
      </div>
      <div class="carousel">
        <div class="carousel-wrapper" ref="newResults">
          <div v-for="(book, index) in searchBook.newBooks" :key="index">
            <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''" alt="Book cover"
              class="slider-img">
          </div>
        </div>
        <button class="carousel-button left" @click="sliderScrollLeft('newResults')">&lt;</button>
        <button class="carousel-button right" @click="sliderScrollRight('newResults')">&gt;</button>
      </div>
      <div class="selection">
        <h1 class="inline-element">Recomendados</h1>
        <p class="inline-element">Ver todos</p>
      </div>
      <div class="carousel">
        <div class="carousel-wrapper" ref="recommendedResults">
          <div v-for="(book, index) in searchBook.recommendedBooks" :key="index">
            <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''" alt="Book cover"
              class="slider-img">
          </div>
        </div>
        <button class="carousel-button left" @click="sliderScrollLeft('recommendedResults')">&lt;</button>
        <button class="carousel-button right" @click="sliderScrollRight('recommendedResults')">&gt;</button>
      </div>
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
    name: 'Dashboard',
    setup() {
      const searchBook = useSearchBook();
  
      searchBook.fetchBooks('chapeuzinho', 'new');
      searchBook.fetchBooks('calvin', 'recommended');
  
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
  @import './Dashboard.scss';
  </style>
  