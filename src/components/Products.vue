<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index" class="item">
      <h4 class="family-name">{{ item.fmyMarketingName }}</h4>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product",
  created() {
    this.getAllProducts();
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions({
      getAllProducts: "getAllProducts",
    }),
  },
};
</script>
<style scoped>
img {
  width: 5rem;
  height: 5rem;
}
.family-name {
  color: #0a0a0a;
}
.products {
  display: flex;
  flex-direction: column;
  background: #bbbaba8c;
  height: 100vh;
  width: 37vw;
  padding-top: 1rem;
  border-radius: 0 1rem 1rem 0;
  box-shadow: 5px 0 5px rgba(218, 218, 218, 0.795);
}
.item {
  padding: 1rem;
  width: 15rem;
}
.item:hover {
  background-color: rgba(175, 175, 175, 0.801);
  overflow: hidden;
  border-radius: 0 0.4rem 0.4rem 0;
}
</style>