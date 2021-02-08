import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    options: {
      customProperties: true
    }
  });

export default new Vuetify({
    rtl:true,
});
