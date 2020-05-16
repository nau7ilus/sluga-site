<template>
  <v-parallax dark :src="require('@/assets/hero.png')" style="user-select:none;">
    <v-row no-gutters align="center" justify="center">
      <v-col class="text-center" cols="12">
        <img :src="require('@/assets/logo.svg')" alt="logo" style="height:135px;" />
        <h1 class="display-3">Слуга народа</h1>
        <h2 class="headline font-weight-light mt-3">Сделаем их вместе!</h2>
        <!-- <v-btn
            large
            class="my-5"
            dark
            elevation="0"
            color="rgb(255, 181, 85)"
            :disabled="!inviteUrl"
            :href="inviteUrl || '#'"
            target="_blank"
        >Пригласить на свой сервер</v-btn>-->
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style>
</style>