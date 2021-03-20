<template>
  <div class="cats">
    <router-link
      :to="{ name: 'Cart', params: { cart_data: CART } }"
      class="cart-btn"
      >Cart: {{ CART.length }}</router-link
    >
    <!-- <h3>{{ title }}</h3> -->
    <div class="shop-wrap">
      <div class="filters">
        <Select
          :options="categories"
          @select="sort"
          :selected="selected"
          :isExpanded="IS_DESKTOP"
        />
        <div class="range-slider">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            v-model.number="minPrice"
            @change="setRangePrice"
          >
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            v-model.number="maxPrice"
            @change="setRangePrice"
          >
        </div>
        <div class="range-slider">
          <span>min: {{minPrice}}</span>
          <span>max: {{maxPrice}}</span>
        </div>
      </div>
      <div class="cats-list">
        <CatsItem
          v-for="product in filtered"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
        />
      </div>
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
            sortedProducts: [],
            minPrice: 0,
            maxPrice: 100
          }
  },
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "CART",
      "IS_MOBILE",
      "IS_DESKTOP"
    ]),
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
    setRangePrice(){
      if(this.minPrice > this.maxPrice){
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
      this.sort()
    },
    sort(category){
      let thatSort = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function(item){
        return item.price >= thatSort.minPrice && item.price <= thatSort.maxPrice
      });
      if(category){
        this.sortedProducts = this.sortedProducts.filter(function(el){
          thatSort.selected = category.name;
          return el.category === category.value
        });
      }
      /*this.sortedProducts = [];
      let sortMap = this;
      this.PRODUCTS.map(function(item){
        if(item.category === category.value){
          sortMap.sortedProducts.push(item);
        }
      });
      this.selected = category.name*/
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        console.log("data arrived");
        this.sort()
      }
    });
  }
};
</script>

<style lang="sass">
@import "@/assets/_variables.sass";
.shop-wrap
  display: grid
  grid-template-columns: 240px auto
  grid-gap: 3rem
  @media (max-width: $mobileView)
    display: flex
    flex-direction: column
.cats-list
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
  grid-gap: 3rem 2rem
  position: relative
.range-slider
  width: 200px
  margin: auto 15px
  text-align: center
  position: relative
  svg, input[type="range"]
    position: absolute
    left: 0
    bottom: 0
input[type="range"]::-webkit-slider-thumb
  z-index: 2
  position: relative
  top: 2px
  margin-top: -7px
</style>
