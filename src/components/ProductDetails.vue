<template>
  <div v-if="clickedProduct && clickedProduct.length" class="product-details">
    <div v-for="(model, index) in clickedProduct" :key="index" class="item">
      <div class="model">
        <splide :options="options" class="carousel">
          <splide-slide
            v-for="(image, index) in model.galleryImage"
            :key="index"
          >
            <img :src="image" />
          </splide-slide>
        </splide>
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
            <button v-if="chip.fmyChipType === 'MOBILE MEMORY'" class="memory">
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
              :href="'https://www.samsung.com/' + model.originPdpUrl"
              target="_blank"
              ><button class="outline">Read more</button></a
            >
            <a
              :href="'https://www.samsung.com/' + model.reviewUrl"
              target="_blank"
              ><button class="outline">Read reviews</button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="!loading" class="intro" v-show="listOpen == false">
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/v1625863922/SamsungProducts/Intro_samsung.png"
      alt="samsung-intro"
    />
    <h2>
      Dit is de meest geavanceerde Galaxy Tab die nieuwe dimensies geeft aan
      werken en spelen
    </h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "Product",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: "20rem",
        gap: "1rem",
      },
    };
  },
  computed: {
    ...mapGetters(["clickedProduct", "loading", "listOpen"]),
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
.carousel img {
  width: 20rem;
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
  background: #38465f;
  color: white;
  font-size: 0.9rem;
  border-color: #38465f;
  border-style: solid;
  border-width: 0.12rem;
  border-radius: 1rem;
  padding: 0.4rem 0.9rem;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;
}
button.outline:hover {
  color: #38465f;
  background: transparent;
  border-color: #38465f;
  transition: all 0.2s linear;
}
button.outline:active {
  border-radius: 1rem;
}
button.color {
  position: relative;
  z-index: 3;
  border-color: #070707;
  border-style: solid;
  border-width: 0.12rem;
  border-radius: 1rem;
  padding: 0.8rem;
  height: 0.8rem;
  margin-left: 1rem;
}
.colors {
  display: flex;
  align-items: center;
}
.memory {
  background: transparent;
  color: #070707;
  font-size: 0.9rem;
  border-color: #070707;
  border-style: solid;
  border-width: 0.12rem;
  border-radius: 1rem;
  padding: 0.4rem 0.9rem;
}
.intro {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.intro img {
  margin-bottom: 2rem;
}
@media only screen and (max-width: 600px) {
  .intro img {
    width: 30rem;
    margin-right: 4rem;
  }
  .intro h2 {
    font-size: 1.3rem;
    margin-right: 4rem;
    text-align: center;
  }
}
</style>