import Vue from "vue";
import Components from "./components";
import "./app.css";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  delimiters: ["${", "}"]
});
