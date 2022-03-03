<template>
  <div id="app">
    <Header/>
    <Menu/>
    <News-letter/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import './assets/main.scss';
import Menu from './components/Menu.vue';
import NewsLetter from './components/NewsLetter';
import './components/main.scss'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu,
    NewsLetter
  }
}
</script>

