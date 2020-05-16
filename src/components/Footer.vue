<template>
  <v-footer color="rgb(74, 180, 75)" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.route"
        color="white"
        text
        rounded
        :to="link.route"
        class="my-2"
      >{{ link.name }}</v-btn>
      <v-col class="rgb(74, 180, 75) py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Слуга народа</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {},
  methods: {},
  watch: {},
  data() {
    return {
      links: [
        { name: "Главная", route: "/" },
        { name: "Программа", route: "/docs" },
        { name: "Discord", route: "/support" },
        { name: "Новости", route: "tog.gg" },

      ]
    };
  }
};
</script>

<style>
.gh-button-container {
  display: inline-flex !important;
  float: none !important;
}
.gh-button-container a {
  color: black !important;
}
</style>
