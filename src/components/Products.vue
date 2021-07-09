<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index" class="item">
      <h5 class="family-name" @click="getProduct(index)">
        {{ item.fmyMarketingName }}
      </h5>
    </div>
  </div>
  <div v-else-if="loading" class="spinner">
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/v1625777151/SamsungProducts/loading.gif"
      alt="loading"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product",
  created() {
    this.getAllProducts();
  },
  computed: {
    ...mapGetters(["allProducts", "loading"]),
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
  box-shadow: 0.3rem 0 0.3rem rgba(218, 218, 218, 0.795);
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
.spinner {
  display: flex;
  margin: 22rem auto;
}
.spinner img {
  width: 2rem;
}
</style>