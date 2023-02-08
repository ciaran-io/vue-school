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
  const alt = useKeyModifier('Alt')
</script>

<template>
  <div>
    <draggable
      v-model="columns"
      group="columns"
      :animation="150"
      handle=".drag-handle"
      item-key="id"
      class="container flex items-start gap-x-4 overflow-x-auto pb-4"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="min-w-[250px] space-y-4 rounded bg-gray-200 p-5">
          <header class="font-semibold">
            <DragHandle />
            {{ column.title }}
          </header>

          <draggable
            v-model="column.tasks"
            :group="{
              name: 'tasks',
              pull: alt ? 'clone' : true,
            }"
            :animation="150"
            item-key="id"
            handle=".drag-handle"
            class="space-y-2"
          >
            <template #item="{ element: task }: { element: Task }">
              <TrelloBoardTask
                :task="task"
                @delete="
                  column.tasks = column.tasks.filter(
                    (task) => task.id !== $event
                  )
                "
              />
            </template>
          </draggable>

          <footer>
            <NewTask @add-task="column.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style lang="postcss">
  .sortable-drag {
    @apply bg-cyan-300;
  }
</style>
