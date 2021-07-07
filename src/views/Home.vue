<template>
  <div class="home">
    <div class="products">
      <Products />
      <Product />
    </div>
    <Footer />
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Products,
    Product,
    Footer,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.products {
  display: flex;
  width: 60vw;
}
</style>
