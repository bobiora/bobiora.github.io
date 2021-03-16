<template>
  <div class="main-shop">
    <keep-alive>
      <router-view />
    </keep-alive>
    <h1 class="heading">{{ title }}</h1>
    <Cats />
    <!-- <Cart v-if="CART.length" :cart_data="CART" /> -->
  </div>
</template>

<script>
import Cats from "@/components/catalog/Cats.vue";
import { mapGetters } from "vuex";

export default {
  name: "mainShop",
  components: {
    Cats
    //Cart
  },
  props: {},
  data() {
    return {
      title: "Shop"
    };
  },
  computed: {
    ...mapGetters(["CART"])
  },
  methods: {},
  watch: {},
  mounted() {}
};
</script>

<style lang="sass">
.main-shop
  margin-top: 180px
  position: relative
  padding-bottom: 30px
</style>
