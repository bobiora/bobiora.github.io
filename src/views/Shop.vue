<template>
  <div class="shop">
    <MainShop />
  </div>
</template>

<script>
// @ is an alias to /src
import MainShop from "@/components/MainShop.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Home",
  components: {
    MainShop
  },
  computed:{
    ...mapGetters(["IS_MOBILE","IS_DESKTOP"])
  },
  methods:{
    ...mapActions(["SET_MOBILE","SET_DESKTOP"])
  },
  mounted() {
    let resizeWin = this;
    window.addEventListener("resize", function(){
      if(window.innerWidth > 767){
        resizeWin.SET_DESKTOP();
        console.log("d", resizeWin.IS_DESKTOP);
      }else{
        resizeWin.SET_MOBILE();
        console.log("m", resizeWin.IS_MOBILE);
      }
    });
  }
};
</script>
