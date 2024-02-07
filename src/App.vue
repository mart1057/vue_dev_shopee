<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <ToolBarNav />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import ToolBarNav from "@/components/ToolBarNav.vue";
export default {
  name: "HomeView",
  components: {
    ToolBarNav,
  },
};
</script>

<style>
body {
  background: #f5f5f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  font-size: 0.79vw;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
