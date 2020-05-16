<template>
  <v-container
    class="text-center"
    fill-height
  >
    <v-row align="center">
      <v-col>
        <h1 class="display-2 green--text">Ошибочка, 404</h1>

        <p>Страница, которую ты ищешь не существует</p>

        <v-btn
          :to="`/`"
          color="green"
          outlined
        >
          Забери меня в свой плен!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FourOhFour',
    props: {
      lang: {
        type: String,
        default: 'en',
      },
    },
    created () {
      this.$ssrContext && this.$ssrContext.res.status(404)
    },
  }
</script>