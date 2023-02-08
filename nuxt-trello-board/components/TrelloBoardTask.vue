<script setup lang="ts">
  import type { Task, Id } from '~/types'

  const props = defineProps<{ task: Task }>()
  const emit = defineEmits<{
    (event: 'delete', payload: Id): void
  }>()

  const isFocused = ref(false)
  onKeyStroke('Backspace', () => {
    if (isFocused.value) emit('delete', props.task.id)
  })

  const createdAtDate = computed(() =>
    new Date(props.task.createdAt).toLocaleDateString()
  )
</script>

<template>
  <div
    class="flex items-start gap-x-2 rounded bg-white p-2 shadow-sm focus:outline focus:outline-2 focus:outline-cyan-600"
    :title="createdAtDate"
    tabindex="0"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <DragHandle />
    <span>{{ task.title }}</span>
  </div>
</template>
