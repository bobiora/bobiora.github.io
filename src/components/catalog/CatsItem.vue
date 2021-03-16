<template>
  <div class="cats-item">
    <img class="cats-item__img" :src="product_data.img" alt="" />
    <h3 class="cats-item__name">{{ product_data.name }}</h3>
    <div class="cats-item__pice">${{ product_data.price }}</div>
    <button class="cats-item__btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "CatsItem",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  },
  mounted(){
    this.$set(this.product_data, "qty", 1)
  }
};
</script>
<style lang="sass">
.cats-item
  &__img
    display: block
    max-width: 100%
    margin-left: auto
    margin-right: auto
  &__name
    margin-top: 20px
    margin-bottom: 15px
    font-weight: bold
  &__pice
    font-size: 22px
    margin-bottom: 15px
</style>
