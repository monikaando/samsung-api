<template>
  <div v-if="clickedProduct && clickedProduct.length" class="product-details">
    <div v-for="(item, index) in clickedProduct" :key="index" class="item">
      <Model :model="item" />
    </div>
  </div>
</template>

<script>
import Model from "@/components/Model.vue";
import { mapGetters } from "vuex";

export default {
  name: "Product",
  components: {
    Model,
  },
  computed: {
    ...mapGetters(["clickedProduct"]),
  },
};
</script>
<style scoped>
.product-details {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}
.item {
  background-color: white;
  margin: 1.3rem;
  border-radius: 1rem;
}
</style>