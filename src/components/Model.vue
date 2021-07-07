<template>
  <div>
    <img :src="model.thumbUrl" :alt="model.thumbUrlAlt" />
    <p>Price: {{ model.promotionPriceDisplay }}</p>
    <p>Model: {{ model.modelName }}</p>
    <p>Ratings: {{ model.ratings }}</p>
    <p>{{ model.reviewCount }} reviews</p>
    <a :href="'https://www.samsung.com/' + model.reviewUrl" target="_blank"
      >Read reviews</a
    >
    <br />
    <a :href="'https://www.samsung.com/' + model.originPdpUrl" target="_blank"
      >Read more on Samsung website</a
    >
    <div v-for="(chip, index) in model.fmyChipList" :key="index">
      <Chip :chip="chip" />
    </div>
    <div>
      Details:
      <div v-for="(details, index) in model.usp" :key="index">
        {{ details }}
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "@/components/Chip.vue";

export default {
  name: "Model",
  props: ["model"],
  components: {
    Chip,
  },
};
</script>

<style>
</style>