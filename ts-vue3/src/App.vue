<script setup lang="ts">
import EntryCard from "@/components/EntryCard.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import TheHeader from "@/components/TheHeader.vue";
import type User from "@/types/User";
import { provide, reactive } from "vue";
import type Entry from "./types/Entry";
import { userInjectionKey } from "./injectionKeys";

// data
const entries: Entry[] = reactive([]);
const user: User = reactive({
  id: 1,
  username: "ciaran-io",
  settings: [],
});
// Provide user data to all components
provide(userInjectionKey, user);

// methods
const handleCreateEntry = (entry: Entry) => {
  entries.unshift(entry);
};
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li
        v-for="entry in entries"
        :key="entry.id"
      >
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
