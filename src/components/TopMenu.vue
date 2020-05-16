<template>
  <div>
    <v-app-bar app dark color="rgb(74, 180, 75)" elevation="15">
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
        v-if="$vuetify.breakpoint.mdAndUp"
        :src="require('../assets/logo.svg')"
        alt="Logo"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="28px"
        max-height="90%"
        @click="$router.push('/')"
        style="cursor:pointer;margin: 1rem"
      />

      <v-toolbar-title class="mr-5" @click="$router.push('/')" style="cursor:pointer;">
        <b>Слуга</b>Народа
      </v-toolbar-title>
      <h1 v-if="route == 'guild'"></h1>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-for="route in routes"
          :key="route.name"
          :to="route.route"
          size="small"
          color="white"
          text
          class="mx-1"
        >{{ route.name }}</v-btn>
      </template>

      <v-divider vertical class="mx-5"></v-divider>

      <div>
        <v-menu v-if="!!discord.user" v-model="miniMenuValue" bottom nudge-bottom="54">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" min-height="54px" tile elevation="0" color="transparent">
              <v-avatar left style="height: 38px; width: 38px;">
                <img :src="discord.user.displayAvatarURL" />
              </v-avatar>
              <span
                v-if="$vuetify.breakpoint.mdAndUp"
                style="text-transform:none;"
              >{{ discord.user.username }}</span>
              <v-icon v-if="miniMenuValue">mdi-chevron-up</v-icon>
              <v-icon v-else>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-card class="mx-auto" width="300px">
            <v-list-item>
              <v-list-item-avatar style="height: 48px; width: 48px;" color="grey">
                <img :src="discord.user.displayAvatarURL" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title style="font-size:25px">{{discord.user.username}}</v-list-item-title>
                <v-list-item-subtitle>{{discord.user.tag}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-actions>
              <v-tooltip bottom open-on-hover>
                <template v-slot:activator="{ on }">
                  <v-btn color="green" text v-on="on">Кабинет</v-btn>
                </template>
                <span>В разработке</span>
              </v-tooltip>
              <v-btn color="red" @click="logout()" text>Выход</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <v-btn text v-else-if="discord.logging" loading color="white"></v-btn>
        <v-btn text v-else @click="login" justify-end color="white">Войти</v-btn>
      </div>
      <template v-slot:extension v-if="showGuildSelect">
        <div
          style="display: block;margin: 0 auto;font-size: 24px !important;line-height: 32px !important;margin-bottom: 20px;"
        >
          <!-- -->
          Выберите
          <img
            src="../assets/discord.png"
            v-if="$vuetify.breakpoint.mdAndUp"
            style="width: 5.5em; margin-bottom: -17px"
          /> сервер
        </div>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-if="$vuetify.breakpoint.smAndDown" v-model="drawer" app>
      <v-list nav dense>
        <v-list-item
          link
          :to="route.route"
          v-for="route in routes"
          :key="route.route"
          @click="drawer = false"
        >
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "TopMenu",

  methods: {
    login() {
      if (this.isAuthenticated) {
        this.$api.logout();
        this.$auth.logout();
      }
      let this_ = this;
      this.$auth
        .authenticate("discord")
        .then(async authResponse => {
          const { access_token } = authResponse.data;
          this_.$api.loginWithToken(access_token);
          this_.miniMenuValue = false;
        })
        .catch(function(err) {
          this_.isAuthenticated = this_.$auth.isAuthenticated();
          this_.response = err;
        });
    },

    logout() {
      this.$api.logout();
      this.$localStorage.remove("vue-authenticate.vueauth_access_token");
      this.$router.push("/");
    }
  },
  data() {
    return {
      discord: this.$api.state,
      drawer: false,
      miniMenuValue: false,
      routes: [
        { name: "Главная", route: "/" },
        { name: "Программа", route: "/program" },
        { name: "Новости", route: "/news" }
      ]
    };
  }
};
</script>

<style>
.menuUserWrap {
  cursor: pointer;
  user-select: none;
}
.menuUserWrap:hover {
  background: #3e3e3e;
}
.menuUserName {
  display: block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Roboto, sans-serif;
}
</style>
