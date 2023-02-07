<script setup lang="ts">
  import type { Task } from '~/types'

  const emit = defineEmits<{
    (event: 'addTask', payload: Task): void
  }>()

  const uuid = () => crypto.randomUUID()
  const isFocused = ref(false)
  const title = ref('')

  function createTask(e: Event) {
    if (title.value.trim()) {
      e.preventDefault()
      emit('addTask', {
        id: uuid(),
        title: title.value.trim(),
        createdAt: new Date(),
      } as Task)
    }
    title.value = ''
  }
</script>

<template>
  <textarea
    v-model="title"
    class="w-full rounded bg-white p-2 shadow-sm"
    :class="{ 'border-2 border-blue-500': isFocused }"
    :placeholder="
      !isFocused
        ? 'Add a new task'
        : 'Enter to add task, tab to add task and create a new one'
    "
    @keydown.enter="createTask"
    @keydown.tab="createTask"
    @focus="isFocused = true"
    @blur="isFocused = false"
  />
</template>
