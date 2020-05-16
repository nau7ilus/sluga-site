<template>
  <section class="text-center">
    <v-layout column wrap class="my-5" align-center>
      <v-flex xs12 sm4 class="my-3">
        <div class="text-center">
          <h2 class="headline">Приумножим достояния, сохраним достоинство.</h2>
          <span class="subheading">Здесь тоже надо что то написать</span>
        </div>
      </v-flex>
    </v-layout>
    <v-layout column wrap class="my-5" align-center>
      <v-flex xs12>
        <v-container dense>
          <v-row wrap align="center" justify="center">
            <v-flex xs12 md4>
              <v-card
                dark
                min-height="375px"
                class="elevation-0 text-xs-center justify-center"
                style="background-color: rgb(34, 147, 62); margin: 30px"
              >
                <v-img
                  height="80px"
                  width="80px"
                  src="@/assets/man.png"
                  style="top: -30px; left: 30px"
                ></v-img>
                <v-card-title primary-title class="layout justify-center">
                  <div
                    class="headline"
                    style="font-size: 30px; margin-top: -30px"
                  >Для кого эта партия</div>
                </v-card-title>
                <v-card-text
                  style="padding-bottom: 60px;font-size: 18px;line-height: 27px;padding-left: 40px;padding-right:40px"
                >Для честных, порядочных людей, которые готовы служить народу, изменять наш штат и отстаивать главную позицию партии — построить штат, в котором хочеться жить!</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card
                dark
                min-height="375px"
                class="elevation-0 text-xs-center justify-center"
                style="background-color: rgb(34, 147, 62); margin: 30px"
              >
                <v-img
                  height="80px"
                  width="80px"
                  src="@/assets/compass.png"
                  style="top: -30px; left: 30px"
                ></v-img>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline" style="font-size: 30px; margin-top: -30px">Основные цели</div>
                </v-card-title>
                <v-card-text
                  style="padding-bottom: 72px;font-size: 18px;line-height: 27px;padding-left: 40px;padding-right:40px"
                >Сделать жителей Ред-Рока равными перед законом, народных избранников — ответственными, наказать коррупционеров. Дать экономике развиваться, навести порядок в системе, построить гуманитарную политику, которая объеденяет штат.</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card
                dark
                min-height="375px"
                class="elevation-0 text-xs-center justify-center"
                style="background-color: rgb(34, 147, 62); margin: 30px"
              >
                <v-img
                  height="80px"
                  width="80px"
                  src="@/assets/heart.png"
                  style="top: -30px; left: 30px"
                ></v-img>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline" style="font-size: 30px; margin-top: -30px">Ценности</div>
                </v-card-title>
                <v-card-text
                  style="padding-bottom: 72px;font-size: 18px;line-height: 27px;padding-left: 40px;padding-right:40px"
                >Прозрачная деятельность, открытость к народу, ответственность перед штатом, командная работа. Участники партии всегда и везде должны быть честными и оставаться людьми!</v-card-text>
              </v-card>
            </v-flex>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: "Cards"
};
</script>

<style>
</style>