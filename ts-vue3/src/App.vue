<script setup lang="ts">
import EntryCard from "@/components/EntryCard.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import TheHeader from "@/components/TheHeader.vue";
import type User from "@/types/User";
import { reactive } from "vue";

const user: User = reactive({
  id: 1,
  username: "ciaran-io",
  settings: [],
});
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor />
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>
