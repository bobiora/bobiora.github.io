<template>
  <div class="cart">
    <router-link :to="{ name: 'shop' }">Back to Shop</router-link>
    <div class="cart__heading">Cart</div>
    <p v-if="!cart_data.length">Cart is empty</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @removeItem="removeItem(index)"
      @decritem="decritem(index)"
      @incritem="incritem(index)"
    />
    <div class="cart__total">total: ${{ cartTotal }}</div>
  </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue";
import { mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    cartTotal() {
      let res = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          res.push(item.price.replace(/ /g, "") * item.qty);
        }
        res = res.reduce(function(sum, elm) {
          return sum + elm;
        });
        return res.toFixed(2);
      } else {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions(["REMOVE_FROM_CART", "DICRITEM", "INCRITEM"]),
    decritem(index) {
      this.DICRITEM(index);
    },
    incritem(index) {
      this.INCRITEM(index);
    },
    removeItem(index) {
      this.REMOVE_FROM_CART(index);
    }
  },
  watch: {}
};
</script>

<style lang="sass">
.cart
  margin-top: 180px
</style>
