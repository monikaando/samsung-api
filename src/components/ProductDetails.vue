<template>
  <div v-if="clickedProduct && clickedProduct.length" class="products">
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
.products {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  width: 40vw;
}
</style>