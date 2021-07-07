<template>
  <div>
    <div v-if="familyChip.fmyChipType === 'COLOR'">
      <h4>Kleurs:</h4>
      <p v-for="(color, index) in familyChip.optionList" :key="index">
        {{ color.optionLocalName }} ({{ color.optionCode }})
      </p>
    </div>
    <div v-if="familyChip.fmyChipType === 'MOBILE MEMORY'">
      <h4>Totale opslagcapaciteit:</h4>
      <p v-for="(memory, index) in familyChip.optionList" :key="index">
        {{ memory.optionLocalName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: ["familyChip"],
};
</script>

<style>
</style>