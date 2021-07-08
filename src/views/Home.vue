<template>
  <div class="home">
    <div class="products">
      <Products />
      <ProductDetails class="details" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Products,
    ProductDetails,
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
}
.details {
  flex-grow: 1;
}
</style>
