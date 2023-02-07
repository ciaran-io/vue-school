type Id = string

interface Task {
  id: Id
  title: string
  createdAt: Date
}

interface Column {
  id: Id
  title: string
  tasks: Task[]
}

export { Id, Column, Task }
