<template>
  <div
    v-if="allProducts && allProducts.length"
    class="products"
    v-show="listOpen"
  >
    <font-awesome-icon icon="times" class="close-icon" @click="closeList" />
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
    ...mapGetters(["listOpen", "allProducts", "loading"]),
  },
  methods: {
    ...mapActions({
      getAllProducts: "getAllProducts",
      getProduct: "getProduct",
      closeList: "closeList",
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
  background: #cecece8c;
  width: fit-content;
  height: 98vh;
  padding-top: 1rem;
  box-shadow: 0.2rem 0 0.2rem rgba(218, 218, 218, 0.575);
}
.close-icon {
  align-self: flex-end;
  margin-right: 1rem;
  cursor: pointer;
}
.item {
  padding: 1rem;
  width: 12rem;
  cursor: pointer;
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
@media only screen and (max-width: 600px) {
  .products {
    width: 100%;
  }
  .item {
    padding: 0 0 0 0.5rem;
  }
}
</style>