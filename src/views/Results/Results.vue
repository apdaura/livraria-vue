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
        <h1>Veja tudo o que temos sobre: <span>{{ searchQuery }}</span></h1>
      </div>
      <div class="results-container">
        <div v-if="loading" class="loading">Carregando...</div>
        <div v-if="!loading && searchResults.length === 0" class="no-results">Nenhum resultado encontrado.</div>
        <div v-if="!loading && searchResults.length > 0" class="results-list">
          <div v-for="(book, index) in searchResults" :key="index" class="result-item">
            <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''" alt="Book cover"
              class="result-img" @click="toggleDescription(index)">
            <div class="result-info" :class="{ 'info-visible': descriptionsVisible[index] }">
              <h2>{{ book.volumeInfo.title }}</h2>
              <p class="title">{{ book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido' }}
              </p>
              <p v-if="descriptionsVisible[index]">{{ book.volumeInfo.description }}</p>
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
import { useSearchBook } from '../../stores/searchBook';
import { useBookVisibility } from '../../stores/bookVisibility';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Results',
  setup() {
    const searchBook = useSearchBook();
    const bookVisibility = useBookVisibility();
    const route = useRoute();
    const searchQuery = ref(route.query.query || '');
    const searchResults = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchBooks = async (query) => {
      loading.value = true;
      try {
        await searchBook.fetchBooks(query, 'search');
        searchResults.value = searchBook.searchResults;
      } catch (err) {
        error.value = 'Failed to fetch books. Please try again later.';
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      if (searchQuery.value) {
        fetchBooks(searchQuery.value);
      }
    });

    watch(() => route.query.query, (newQuery) => {
      searchQuery.value = newQuery || '';
      if (searchQuery.value) {
        fetchBooks(searchQuery.value);
      }
    });
    const toggleDescription = (index) => {
      bookVisibility.toggleDescription(index);
    };

    return { searchQuery, searchResults, loading, error, toggleDescription, descriptionsVisible: bookVisibility.descriptionsVisible };
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
@import './Results.scss';


.search-header {
  text-align: center;
  margin: 2rem 0;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;

    span {
      color: $amarelo-principal;
    }
  }
}

.results-container {

  .loading,
  .no-results {
    text-align: center;
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  .results-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;


    .result-item {
      width: 15%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
      overflow: hidden;
      background-color: $branco-principal;

      .result-img {
        width: 100%;
        height: auto;
        display: block;
        cursor: pointer;
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

      .info-visible {
        background: $cor-input;

        .title {
          color: black;

        }

      }
    }
  }
}
</style>