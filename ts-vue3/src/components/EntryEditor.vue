<script lang="ts" setup>
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import EmojiField from "@/components/EmojiField.vue";
import type Emoji from "@/types/Emoji";
import { ref, computed } from "vue";

const text = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => text.value.length);
const maxCharCount = 280;
// Remove text inout after 280 characters
const handleTextInput = (event: Event) => {
  const textarea = event.target as HTMLInputElement;

  if (textarea.value.length <= maxCharCount) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.substring(0, maxCharCount);
  }
};
</script>

<template>
  <form class="entry-form" @submit.prevent>
    <textarea
      @keyup="handleTextInput"
      :value="text"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxCharCount }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
