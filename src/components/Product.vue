<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index" class="item">
      <h3 class="family-name">{{ item.fmyMarketingName }}</h3>
      <div v-for="familyChip in item.chipOptions" :key="familyChip.fmyChipType">
        <FamilyChip :familyChip="familyChip" />
      </div>
      <!-- <div v-for="(model, index) in item.modelList" :key="index">
        <Model :model="model" />
      </div> -->
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FamilyChip from "@/components/FamilyChip.vue";
// import Model from "@/components/Model.vue";

export default {
  name: "Product",
  components: {
    FamilyChip,
    // Model,
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
<style scoped>
img {
  width: 5rem;
  height: 5rem;
}
.family-name {
  color: #edae49;
}
.products {
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-between;
}
.item {
  margin: 3rem 3rem;
}
</style>