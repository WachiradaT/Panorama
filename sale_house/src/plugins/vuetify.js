import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.lighten2,
        secondary: colors.lightBlue.lighten3,
        accent: colors.grey.lighten3
      }
    }
  }
})
