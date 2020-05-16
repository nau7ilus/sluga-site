<template>
  <v-app>
    <TopMenu />
    <v-content>
        <router-view :key="$route.path"></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>
<style>
.theme--dark.v-application {
  background: #26262b !important;
}
.restrictWidth {
  max-width: 1140px;
}
</style>
<script>
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    TopMenu,
    Footer
  },
  data: () => ({
    //
  }),
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title
          ? `${to.meta.title} | Слуга народа`
          : "Слуга народа";
      },
      immediate: true
    }
  }
};
</script>
