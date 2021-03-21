<template>
  <div id="app">
    <header class="header">
      <img
        src="@/assets/logo.svg"
        class="header__logo"
        :class="isHomePage ? '' : 'header__logo--dark'"
        alt=""
      />
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
      </div>
    </header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  computed: {
    isHomePage() {
      if (this.$route.path == "/" || this.$route.path == "/home") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="sass">
@import "./assets/styles.sass"
</style>
