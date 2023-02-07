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
  <div class="container flex items-start gap-x-4 overflow-x-auto pb-4">
    <div
      v-for="column in columns"
      :key="column.id"
      class="min-w-[250px] rounded bg-gray-200 p-5 space-y-4"
    >
      <header class="font-semibold">
        {{ column.title }}
      </header>

      <div class="space-y-2">
        <TrelloBoardList
          v-for="task in column.tasks"
          :key="task.id"
          :task="task"
        />
      </div>
      <footer>
        <button>Add a Card</button>
      </footer>
    </div>
  </div>
</template>
