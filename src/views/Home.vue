<template>
  <v-container fluid class="mx-0 px-0 mt-0 pt-0">
    <Header />
    <Cards />
    <JoinUs />
    <Program />
  </v-container>
</template>

<script>
import Header from "@/components/home/Header.vue";
import Cards from "@/components/home/Cards.vue";
import JoinUs from "@/components/home/JoinUs.vue";
import Program from "@/components/home/Program.vue";

export default {
  name: "Home",
  components: {
    Header,
    Cards,
    JoinUs,
    Program
  }
};
</script>

<style>
.headline {
  line-height: 45px !important;
  font-weight: 500 !important;
}
</style>
