<template>
  <div class="cats">
    <router-link
      :to="{ name: 'Cart', params: { cart_data: CART } }"
      class="cart-btn"
      >Cart: {{ CART.length }}</router-link
    >
    <!-- <h3>{{ title }}</h3> -->
    <div class="cats-list">
      <CatsItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import CatsItem from "@/components/catalog/CatsItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cats",
  components: {
    CatsItem
  },
  props: {},
  data() {
    return { title: "Cats" };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        console.log("data arrived");
      }
    });
  }
};
</script>

<style lang="sass">
.cats-list
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
  grid-gap: 3rem 2rem
</style>
