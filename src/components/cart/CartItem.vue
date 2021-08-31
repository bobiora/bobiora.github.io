<template>
  <div class="cart-item">
    <img class="cart-item__img" :src="cart_item_data.img" alt="" />
    <div class="cart-item__description">
      <div>{{ cart_item_data.name }}</div>
      <div>{{ cart_item_data.price | formatedPrice | toFix}}</div>
      <div>{{ cart_item_data.id }}</div>
    </div>
    <div class="cart-item__qty">
      <span @click="decrItem">-</span>Qty: {{ cart_item_data.qty
      }}<span @click="incrItem">+</span>
    </div>
    <button @click="removeItem">remove</button>
  </div>
</template>

<script>
import formatedPrice from "@/filters/formatedPrice.js";
import toFix from "@/filters/toFix.js";

export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  filters:{
    formatedPrice,
    toFix
  },
  computed: {},
  methods: {
    decrItem() {
      this.$emit("decritem");
    },
    incrItem() {
      this.$emit("incritem");
    },
    removeItem() {
      this.$emit("removeItem");
    }
  },
  mounted() {}
};
</script>
<style lang="sass">
.cart-item
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: nowrap
    margin-bottom: 15px
    padding: 15px
    &__img
        max-width: 150px
</style>
