<template>
  <div
    class="hero"
    :style="{
      'background-image': 'url(' + require('@/assets/bg-hero-skills.png') + ')'
    }"
  ></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      hero: "Bofolio"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  background-position: center;
  background-size: cover;
  height: 100vh;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
