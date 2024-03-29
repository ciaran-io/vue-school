<script lang="ts" setup>
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import EmojiField from "@/components/EmojiField.vue";
import type Emoji from "@/types/Emoji";
import type Entry from "@/types/Entry";
import { ref, computed, onMounted, inject } from "vue";
import { userInjectionKey } from "@/injectionKeys";

// data
const body = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => body.value.length);
const maxCharCount = 280;
const user = inject(userInjectionKey);

// template refs
const textarea = ref<HTMLTextAreaElement | null>(null);

// Hooks
onMounted(() => textarea.value?.focus());

// events
const emit = defineEmits<{
  (Event: "@create", entry: Entry): void;
}>();

// methods
// Remove text inout after 280 characters
const handleTextInput = (event: Event) => {
  const textarea = event.target as HTMLInputElement;

  if (textarea.value.length <= maxCharCount) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.substring(0, maxCharCount);
  }
};

const handleSubmit = () => {
  emit("@create", {
    id: Math.random(),
    userId: 1,
    createdAt: new Date(),
    body: body.value,
    emoji: emoji.value,
  });
  body.value = "";
  emoji.value = null;
};
</script>

<template>
  <form
    class="entry-form"
    @submit.prevent="handleSubmit"
  >
    <textarea
      ref="textarea"
      :value="body"
      :placeholder="`New Journal Entry for ${user?.username || 'anonymous'}`"
      @keyup="handleTextInput"
    />
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxCharCount }}</span>
      <button>
        Remember
        <ArrowCircleRight width="20" />
      </button>
    </div>
  </form>
</template>
