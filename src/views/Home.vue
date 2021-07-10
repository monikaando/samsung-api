<template>
  <div class="home">
    <div class="prod">
      <Toggler />
      <Products />
      <ProductDetails class="prod-det" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Toggler from "@/components/Toggler.vue";
import Products from "@/components/Products.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Toggler,
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
.prod {
  display: flex;
}
.prod-det {
  flex-grow: 1;
}
</style>
