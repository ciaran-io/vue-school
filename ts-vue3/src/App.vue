<script setup lang="ts">
import EntryCard from "@/components/EntryCard.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import TheHeader from "@/components/TheHeader.vue";
import type User from "@/types/User";
import type Emoji from "@/types/Emoji";

import { reactive } from "vue";

const user: User = reactive({
  id: 1,
  username: "ciaran-io",
  settings: [],
});
const handleCreateEntry = (entry: { text: string; emoji: Emoji | null }) => {
  console.log(entry);
};
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>
