<template>
    <div id="SearchResults" class="SearchResults">
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
      </header>
      <main>
        <div class="search-header">
          <h1>Resultados da Pesquisa</h1>
          <p>Você pesquisou por: <strong>{{ query }}</strong></p>
        </div>
        <div class="results-container">
          <div v-if="loading" class="loading">Carregando...</div>
          <div v-if="!loading && searchResults.length === 0" class="no-results">Nenhum resultado encontrado.</div>
          <div v-if="!loading && searchResults.length > 0" class="results-list">
            <div v-for="(book, index) in searchResults" :key="index" class="result-item">
              <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''" alt="Book cover" class="result-img">
              <div class="result-info">
                <h2>{{ book.volumeInfo.title }}</h2>
                <p>{{ book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido' }}</p>
                <p>{{ book.volumeInfo.description }}</p>
              </div>
            </div>
          </div>
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
  import { ref, onMounted } from 'vue';
  import { useSearchBook } from '../../stores/searchBook';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'SearchResults',
    setup() {
      const searchBook = useSearchBook();
      const route = useRoute();
      const query = ref(route.query.q || '');
      const searchResults = ref([]);
      const loading = ref(true);
  
      const fetchResults = async () => {
        try {
          if (query.value) {
            const results = await searchBook.searchBooks(query.value);
            searchResults.value = results;
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        fetchResults();
      });
  
      return { query, searchResults, loading };
    }
  };
  </script>
  
  <style lang="scss">
  @import '@/assets/styles/main.scss';
  @import './Results.scss';
  
  .SearchResults {
    .search-header {
      text-align: center;
      margin: 2rem 0;
  
      h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
  
      p {
        font-size: 1.2rem;
        color: $cinza-unselected;
      }
    }
  
    .results-container {
      .loading, .no-results {
        text-align: center;
        font-size: 1.5rem;
        margin: 2rem 0;
      }
  
      .results-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
  
        .result-item {
          width: 24%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: $branco-principal;
  
          .result-img {
            width: 100%;
            height: auto;
            display: block;
          }
  
          .result-info {
            padding: 1rem;
            text-align: center;
  
            h2 {
              font-size: 1.2rem;
              margin-bottom: 0.5rem;
            }
  
            p {
              font-size: 1rem;
              color: $cinza-unselected;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
    }
  }
  </style>