<template>
  <div v-if="allProducts && allProducts.length" class="products">
    <div v-for="(item, index) in allProducts" :key="index">
      <h3 class="family-name">{{ item.fmyMarketingName }}</h3>
      <div v-for="(chip, index) in item.chipOptions" :key="index">
        <div v-if="chip.fmyChipType === 'COLOR'">
          <h4>Colors:</h4>
          <p v-for="(color, index) in chip.optionList" :key="index">
            {{ color.optionLocalName }} ({{ color.optionCode }})
          </p>
        </div>
        <div v-if="chip.fmyChipType === 'MOBILE MEMORY'">
          <h4>Mamory:</h4>
          <p v-for="(memory, index) in chip.optionList" :key="index">
            {{ memory.optionLocalName }}
          </p>
        </div>
      </div>

      <div v-for="(model, index) in item.modelList" :key="index">
        <img :src="model.thumbUrl" :alt="model.thumbUrlAlt" />
        <p>Price: {{ model.promotionPriceDisplay }}</p>
        <p>Model: {{ model.modelName }}</p>
        <p>Ratings: {{ model.ratings }}</p>
        <p>{{ model.reviewCount }} reviews</p>
        <a :href="'https://www.samsung.com/' + model.reviewUrl" target="_blank"
          >Read reviews</a
        >
        <br />
        <a
          :href="'https://www.samsung.com/' + model.originPdpUrl"
          target="_blank"
          >Read more on Samsung website</a
        >

        <!-- <div v-for="(chip, index) in model.fmyChipList" :key="index">
          <p v-if="chip.fmyChipType === 'COLOR'">
            Colors: {{ chip.fmyChipLocalName }}
          </p>
          <p v-if="chip.fmyChipType === 'MOBILE MEMORY'">
            Memory: {{ chip.fmyChipLocalName }}
          </p>
        </div>
        Details:
        <div v-for="(details, index) in model.usp" :key="index">
          {{ details }}
        </div> -->
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// const flatten = require("flat");
export default {
  name: "Product",
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
  color: red;
}
/* .products {
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-between;
} */
</style>