<template>
    <div id="Colecoes" class="Colecoes">
        <header>
            <div class="first-line">
                <img src="@/assets/styles/img/logo.png" alt="logo" class="logo">
                <ul class="top-menu">
                    <li><router-link to="/" class="a">Home</router-link></li>
                    <li><router-link to="/categorias" class="a">Categorias</router-link></li>
                    <li><router-link to="/colecoes" class="a">Coleções</router-link></li>
                </ul>
                <router-link to="/login" class="login-button">Login</router-link>
            </div>
        </header>
        <div class="manu"></div>
    <footer>
        <div class="footer-content">
          <div class="footer-section about">
            <h3>Sobre Nós</h3>
            <p>A Livraria Daura é sua fonte confiável para uma ampla seleção de livros. Desde clássicos atemporais até os mais recentes lançamentos, temos algo para todos os amantes da leitura.</p>
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

<style lang="scss">
@import './Colecoes.scss';
@import '@/assets/styles/main.scss'; 
</style>
