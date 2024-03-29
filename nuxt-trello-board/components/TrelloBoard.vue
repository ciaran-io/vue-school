<script setup lang="ts">
  import draggable from 'vuedraggable'
  import type { Column } from '~/types'

  const uuid = () => crypto.randomUUID()

  const columns = useLocalStorage<Column[]>('trelloBoard',[
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

  function createColumn() {
    const column: Column = {
      id: uuid(),
      title: '',
      tasks: [],
    }
    columns.value.push(column)
    nextTick(() => {
      ;(
        document.querySelector(
          '.column:last-of-type .title-input'
        ) as HTMLInputElement
      ).focus()
    })
  }
</script>

<template>
  <div class="container flex items-start gap-x-4 overflow-x-auto">
    <draggable
      v-model="columns"
      group="columns"
      :animation="150"
      handle=".drag-handle"
      item-key="id"
      class="flex items-start gap-x-4 pb-4"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="column min-w-[250px] space-y-4 rounded bg-gray-200 p-5">
          <header class="flex items-end font-semibold">
            <DragHandle />
            <input
              v-model="column.title"
              class="title-input bg-transparent px-1 focus:bg-white"
              type="text"
              @keyup.enter=";($event.target as HTMLInputElement).blur()"
              @keydown.delete="
                column.title === ''
                  ? (columns = columns.filter((c) => c.id !== column.id))
                  : null
              "
            />
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
    <button
      class="min-w-fit rounded bg-gray-400 p-2"
      @click="createColumn"
    >
      ➕Add Another Column
    </button>
  </div>
</template>

<style lang="postcss">
  .sortable-drag {
    @apply bg-cyan-300;
  }
</style>
