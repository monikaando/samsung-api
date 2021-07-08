<template>
  <div class="model">
    <img :src="model.thumbUrl" :alt="model.thumbUrlAlt" class="thumburl" />
    <div class="model-text">
      <p v-if="model.promotionPriceDisplay">
        <strong>{{ model.promotionPriceDisplay }} €</strong>
      </p>
      <p v-else><strong>Unknown</strong></p>
      <p class="model-name"><strong> Model: </strong> {{ model.modelName }}</p>
      <div v-for="(chip, index) in model.fmyChipList" :key="index">
        <Chip :chip="chip" />
      </div>
      <p class="details"><strong> Details:</strong></p>
      <ul>
        <li v-for="(details, index) in model.usp" :key="index">
          {{ details }}
        </li>
      </ul>
      <div class="links">
        <a :href="'https://www.samsung.com/' + model.reviewUrl" target="_blank"
          >Read reviews</a
        >
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
  margin-bottom: 2rem;
}
.model-text {
  padding-left: 1.3rem;
}
.model-na {
  margin-top: 2rem;
}
.details {
  margin-top: 2rem;
}
ul {
  padding-left: 1.2rem;
}
.links {
  display: flex;
  flex-direction: column;
}
.links a {
  padding-top: 1rem;
}
.thumburl {
  padding: 0 1rem;
}
</style>