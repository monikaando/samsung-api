<template>
  <div v-if="allProducts && allProducts.length">
    <div v-for="(item, index) in allProducts" :key="index">
      <h3>{{ item.fmyMarketingName }}</h3>
      <div v-for="(model, index) in item.modelList" :key="index">
        <p>{{ model.displayName }}</p>
        <img :src="model.thumbUrl" :alt="model.thumbUrlAlt" />
      </div>
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
</style>