<script setup lang="ts">
  import type { Task } from '~/types'

  defineProps<{ task: Task }>()
</script>

<template>
  <div
    class="rounded bg-white p-2 shadow-sm"
    :title="task.createdAt.toLocaleDateString()"
  >
    <span>{{ task.title }}</span>
  </div>
</template>
