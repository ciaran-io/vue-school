<script setup lang="ts">
  import type { Task } from '~/types'

  defineProps<{ task: Task }>()
</script>

<template>
  <div
    class="rounded bg-white p-2 shadow-sm flex items-start gap-x-2"
    :title="task.createdAt.toLocaleDateString()"
  >
    <DragHandle />
    <span>{{ task.title }}</span>
  </div>
</template>
