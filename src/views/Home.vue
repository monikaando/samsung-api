<template>
  <div>
    <h1>Samsung products</h1>
    <div v-for="(item, index) in allProducts" :key="index">
      <p>{{ item.fmyMarketingName }}</p>
    </div>
    <Product />
    <Footer />
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Product,
    Footer,
  },
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