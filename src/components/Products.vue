<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index" class="item">
      <h5 class="family-name" @click="getProduct(index)">
        {{ item.fmyMarketingName }}
      </h5>
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
      getProduct: "getProduct",
    }),
  },
};
</script>
<style scoped>
.products {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  background: #bbbaba8c;
  width: fit-content;
  height: 98vh;
  padding-top: 1rem;
  border-radius: 0 1rem 1rem 0;
  box-shadow: 5px 0 5px rgba(218, 218, 218, 0.795);
}
.item {
  padding: 1rem;
  width: 12rem;
}
.item:hover {
  background-color: rgba(151, 151, 151, 0.563);
  border-radius: 0 0.4rem 0.4rem 0;
  width: 12rem;
}
.family-name {
  color: #0a0a0a;
}
</style>