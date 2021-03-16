<template>
  <div class="shop">
    <MainShop />
  </div>
</template>

<script>
// @ is an alias to /src
import MainShop from "@/components/MainShop.vue";

export default {
  name: "Home",
  components: {
    MainShop
  }
};
</script>
