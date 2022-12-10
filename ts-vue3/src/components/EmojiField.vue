<script lang="ts" setup>
import UseEmojis from "@/composables/UseEmojis";
// data
const { emojis } = UseEmojis();

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="emoji-container">
    <component
      :is="emoji.component"
      v-for="emoji in emojis"
      :key="emoji.name"
      :class="{ selected: modelValue === emoji.name }"
      @click="
        $emit(
          'update:modelValue',
          emoji.name === modelValue ? null : emoji.name
        )
      "
    ></component>
  </div>
</template>
