<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index" class="item">
      <h3 class="family-name">{{ item.fmyMarketingName }}</h3>
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
  flex-flow: wrap;
  justify-content: space-between;
  background: rgba(252, 252, 252, 0.795);
}
.item {
  margin: 3rem 1rem;
}
</style>