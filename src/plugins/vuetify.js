import Vue from "vue";
import Vuetify from "vuetify/lib";
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: "#7289da",
        secondary: "#18191c",
        accent: "#ffffff",
        error: "#7c0000"
      }
    }
  },
  icons: {
    iconfont: 'md',
  },
});
