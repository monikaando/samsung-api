<template>
  <div class="model">
    <img :src="model.thumbUrl" :alt="model.thumbUrlAlt" />
    <div class="model-text">
      <p v-if="model.promotionPriceDisplay">
        <strong>{{ model.promotionPriceDisplay }} €</strong>
      </p>
      <p v-else><strong>Unknown</strong></p>
      <p>Model: {{ model.modelName }}</p>
      <p>Ratings: {{ model.ratings }}</p>
      <div v-for="(chip, index) in model.fmyChipList" :key="index">
        <Chip :chip="chip" />
      </div>
      <div>
        Details:
        <div v-for="(details, index) in model.usp" :key="index">
          {{ details }}
        </div>
      </div>
      <div>
        <a :href="'https://www.samsung.com/' + model.reviewUrl" target="_blank"
          >Read reviews</a
        >
      </div>
      <div>
        <a
          :href="'https://www.samsung.com/' + model.originPdpUrl"
          target="_blank"
          >Read more on Samsung website</a
        >
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

<style scoped>
.model {
  margin-bottom: 5rem;
}
.model-text {
  padding-left: 1.3rem;
}
</style>