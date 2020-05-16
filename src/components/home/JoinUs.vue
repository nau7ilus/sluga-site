<template>
  <section>
    <v-parallax src="@/assets/hero.png" height="380">
      <v-layout column align-center justify-center dark text-center>
        <div
          class
          v-if="$vuetify.breakpoint.xsOnly"
          style="font-size: 30px; font-weight: 700"
        >Присоединяйся к нам</div>
        <div class v-else style="font-size: 45px; font-weight: 700">Присоединяйся к нам</div>

        <v-btn
          color="white"
          outlined
          dark
          style="margin-top: 20px"
          large
          href="http://forum.arizona-rp.com/index.php?threads/red-rock-demokraticheskaja-konservativnaja-partija-sluga-naroda-kandidat-kristofer-staff.1416143/"
        >Оставить заявку</v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "JoinUs"
};
</script>

<style>
</style>