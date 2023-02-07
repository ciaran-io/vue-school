<script setup lang="ts">
  import type { Column } from '~/types'

  const uuid = () => crypto.randomUUID()

  const columns = ref<Column[]>([
    {
      id: uuid(),
      title: 'Backlog',
      tasks: [
        {
          id: uuid(),
          title: 'Create marketing landing page',
          createdAt: new Date(),
        },
        {
          id: uuid(),
          title: 'Design new logo',
          createdAt: new Date(),
        },
        {
          id: uuid(),
          title: 'Improve SEO',
          createdAt: new Date(),
        },
      ],
    },
    {
      id: uuid(),
      title: 'In progress',
      tasks: [],
    },
    {
      id: uuid(),
      title: 'Staging',
      tasks: [],
    },
    {
      id: uuid(),
      title: 'Completed',
      tasks: [],
    },
  ])
</script>

<template>
  <div class="flex items-start gap-x-4 overflow-x-auto">
    <div
      v-for="column in columns"
      :key="column.id"
      class="bg-gray-200 p-5 rounded min-w-[250px]  "
    >
      <header>{{ column.title }} </header>
      <p
        v-for="task in column.tasks"
        :key="task.id"
      >
        {{ task.title }}
      </p>
    </div>
  </div>
</template>
