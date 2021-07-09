<template>
  <div v-if="clickedProduct && clickedProduct.length" class="product-details">
    <div v-for="(model, index) in clickedProduct" :key="index" class="item">
      <div class="model">
        <img :src="model.thumbUrl" :alt="model.thumbUrlAlt" class="thumburl" />
        <div class="model-text">
          <p v-if="model.promotionPriceDisplay">
            <strong>{{ model.promotionPriceDisplay }} €</strong>
          </p>
          <p v-else><strong>Unknown</strong></p>
          <p class="model-name">
            <strong> Model: </strong> {{ model.modelName }}
          </p>
          <div v-for="(chip, index) in model.fmyChipList" :key="index">
            <div class="colors" v-if="chip.fmyChipType === 'COLOR'">
              <p>
                {{ chip.fmyChipLocalName }}
              </p>
              <button
                class="color"
                :style="{ background: chip.fmyChipCode }"
              ></button>
            </div>
            <button v-if="chip.fmyChipType === 'MOBILE MEMORY'" class="outline">
              {{ chip.fmyChipLocalName }}
            </button>
          </div>
          <p class="details"><strong> Details:</strong></p>
          <ul>
            <li v-for="(details, index) in model.usp" :key="index">
              {{ details }}
            </li>
          </ul>
          <div class="links">
            <a
              :href="'https://www.samsung.com/' + model.reviewUrl"
              target="_blank"
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Product",
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
  margin: 1rem;
  border-radius: 1rem;
}
.model {
  margin-bottom: 2rem;
}
.model-text {
  padding-left: 1.3rem;
}
.model-name {
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
button.outline {
  position: relative;
  z-index: 3;
  background: transparent;
  color: #070707;
  font-size: 14px;
  border-color: #070707;
  border-style: solid;
  border-width: 2px;
  border-radius: 22px;
  padding: 7px 15px;
  text-transform: uppercase;
  transition: all 0.2s linear;
}
button.outline:hover {
  color: white;
  background: #070707;
  border-color: #070707;
  transition: all 0.2s linear;
}
button.outline:active {
  border-radius: 22px;
}
button.color {
  position: relative;
  z-index: 3;
  border-color: #070707;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 20px;
  padding: 10px;
  height: 10px;
  margin-left: 1.5rem;
}
.colors {
  display: flex;
  align-items: center;
}
</style>