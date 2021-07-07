<template>
  <div>
    <Product />
    <Footer />
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Product,
    Footer,
  },
};
</script>
