<template>
  <div class="cats">
    <router-link
      :to="{ name: 'Cart', params: { cart_data: CART } }"
      class="cart-btn"
      >Cart: {{ CART.length }}</router-link
    >
    <!-- <h3>{{ title }}</h3> -->
    <Select
      :options="categories"
      @select="sort"
      :selected="selected"
    />
    <div class="cats-list">
      <CatsItem
        v-for="product in filtered"
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
import Select from "@/components/catalog/Select.vue"

export default {
  name: "Cats",
  components: {
    CatsItem,
    Select
  },
  props: {},
  data() {
    return {
            title: "Cats",
            categories: [
              {name: "All Arts", value: "all"},
              {name: "Framed Prints", value: "framed"},
              {name: "Mini Art Prints", value: "mini"},
            ],
            selected: "Filter",
            sortedProducts: []
          }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filtered(){
      if(this.sortedProducts.length){
        return this.sortedProducts
      }else{
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sort(category){
      this.sortedProducts = [];
      let sortMap = this;
      this.PRODUCTS.map(function(item){
        if(item.category === category.value){
          sortMap.sortedProducts.push(item);
        }
      });
      this.selected = category.name
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
