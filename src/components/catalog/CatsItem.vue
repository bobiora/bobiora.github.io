<template>
  <div class="cats-item">
    <img @click="showInfo" class="cats-item__img" :src="product_data.img" alt="" />
    <h3 class="cats-item__name">{{ product_data.name }}</h3>
    <div class="cats-item__pice">${{ product_data.price }}</div>
    <button
      class="cats-item__btn btn"
      @click="showInfo"
    >
      View
    </button>
    <button class="cats-item__btn btn" @click="addToCart">Add to cart</button>
    <ModalView
      v-if="isInfoVisible"
      :modalTitle="product_data.name"
      btnModal="Add to cart"
      @closeModal="closeModalView"
      @btnAction="addToCart"
    >
      <img class="cats-item__img" :src="product_data.img" alt="" />
      <div>
        <h3 class="cats-item__name">{{ product_data.name }}</h3>
        <div class="cats-item__pice">${{ product_data.price }}</div>
        <div class="cats-item__category">{{ product_data.category }}</div>
      </div>
    </ModalView>
  </div>
</template>

<script>
import ModalView from "@/components/modalview/ModalView.vue";

export default {
  name: "CatsItem",
  components: {
    ModalView
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isInfoVisible: false
    };
  },
  computed: {},
  methods: {
    showInfo() {
      this.isInfoVisible = true
    },
    closeModalView() {
      this.isInfoVisible = false
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  },
  mounted() {
    this.$set(this.product_data, "qty", 1);
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
