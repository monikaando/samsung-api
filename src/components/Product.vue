<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index" class="item">
      <h3 class="family-name">{{ item.fmyMarketingName }}</h3>
      <div v-for="(model, index) in item.modelList" :key="index">
        <Model :model="model" />
      </div>
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
    ...mapGetters(["allProducts"]),
  },
};
</script>

<style>
</style>