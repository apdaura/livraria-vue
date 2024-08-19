<template>
  <div id="Login" class="Login">
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
    <main>
      <div class="login-container">
        <h1>Entrar</h1>
        <form class="login-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">Usuário</label>
            <input type="text" id="username" v-model="username" placeholder="Digite seu usuário" required>
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required>
            <div class="forgot-password">
              <a href="#">Esqueci minha senha</a>
            </div>
          </div>
          <button type="submit" class="submit-button">Entrar</button>
          <button type="button" class="signup-button">Cadastre-se</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      fixedUsername: 'admin',
      fixedPassword: 'password'
    };
  },
  methods: {
    handleLogin() {
      if (this.username === this.fixedUsername && this.password === this.fixedPassword) {
        this.$router.push('/dashboard');
      } else {
        alert('Usuário ou senha incorretos.');
      }
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/main.scss'; 
@import './Login.scss';
</style>
