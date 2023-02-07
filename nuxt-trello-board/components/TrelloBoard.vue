<script setup lang="ts">
  import draggable from 'vuedraggable'
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
  <div>
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      class="container flex items-start gap-x-4 overflow-x-auto pb-4"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="min-w-[250px] space-y-4 rounded bg-gray-200 p-5">
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
      </template>
    </draggable>
  </div>
</template>
