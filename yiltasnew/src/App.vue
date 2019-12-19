<template>
  <div id="app">
    <div class="container">
<MainHeader></MainHeader>
      <CategoryMenu></CategoryMenu><br><br>
    <router-view/>
      <EmailSubmit style="margin-top: 60px"></EmailSubmit>
      <Footer></Footer>


    </div>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import CategoryMenu from "./components/CategoryMenu";
import EmailSubmit from "./components/EmailSubmit";
import Footer from "./components/Footer";



export default {
  name: 'App',
  components: {Footer, EmailSubmit, CategoryMenu, MainHeader}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
