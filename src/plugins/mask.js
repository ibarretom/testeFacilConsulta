import Vue from "vue";
import VueMask from "v-mask";
import VueMoney from "v-money";

Vue.use(VueMoney, {
  decimal: ",",
  thousands: ".",
  precision: 2,
});
Vue.use(VueMask);
