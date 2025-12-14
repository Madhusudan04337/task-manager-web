import { useState, useEffect } from "react"
import Header from "./components/Header"
import TaskPanel from "./components/TaskPanel"
import TaskModal from "./components/TaskModal"
import DeleteModal from "./components/DeleteModal"
import "./index.css"
// Default tasks to show on first load
const defaultTasks = [
  {
    id: "1",
    title: "Design Homepage UI",
    description: "Create wireframes and mockups",
    priority: "High",
    status: "To-Do",
    dueDate: "2025-12-20",
  },
  {
    id: "2",
    title: "Implement Drag and Drop",
    description: "Add drag functionality to task cards",
    priority: "Medium",
    status: "In-Progress",
    dueDate: "2025-12-25",
  },
]

export default function App() {
  // State for tasks
  const [tasks, setTasks] = useState([])

  // State for filters and sorting
  const [filter, setFilter] = useState({ priority: "", status: "" })
  const [sort, setSort] = useState("newest")

  // State for modals
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [deletingTask, setDeletingTask] = useState(null)

  // State for drag and drop
  const [draggedTask, setDraggedTask] = useState(null)

  // Load tasks from localStorage when app starts
  useEffect(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) {
      setTasks(JSON.parse(saved))
    } else {
      setTasks(defaultTasks)
    }
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])

  // Filter tasks based on priority and status
  let filteredTasks = tasks.filter((task) => {
    if (filter.priority && task.priority !== filter.priority) return false
    if (filter.status && task.status !== filter.status) return false
    return true
  })

  // Sort filtered tasks
  if (sort === "oldest") {
    filteredTasks = filteredTasks.sort((a, b) => a.id - b.id)
  } else if (sort === "dueDate") {
    filteredTasks = filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
  } else {
    filteredTasks = filteredTasks.sort((a, b) => b.id - a.id)
  }

  // Add new task
  function addTask(task) {
    const newTask = { ...task, id: Date.now().toString() }
    setTasks([...tasks, newTask])
  }

  // Update existing task
  function updateTask(id, updates) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updates } : task)))
  }

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Handle saving task from modal
  function handleSave(taskData) {
    if (editingTask) {
      updateTask(editingTask.id, taskData)
    } else {
      addTask(taskData)
    }
    setModalOpen(false)
    setEditingTask(null)
  }

  // Open modal to add new task
  function openAddModal() {
    setEditingTask(null)
    setModalOpen(true)
  }

  // Open modal to edit task
  function handleEdit(task) {
    setEditingTask(task)
    setModalOpen(true)
  }

  // Open delete confirmation modal
  function handleDeleteClick(task) {
    setDeletingTask(task)
    setDeleteModalOpen(true)
  }

  // Confirm delete
  function confirmDelete() {
    if (!deletingTask) return;
    deleteTask(deletingTask.id)
    setDeleteModalOpen(false)
    setDeletingTask(null)
  }

  // Drag and drop handlers
  function onDragStart(task) {
    setDraggedTask(task)
  }

  function onDrop(newStatus) {
    if (draggedTask && draggedTask.status !== newStatus) {
      updateTask(draggedTask.id, { status: newStatus })
    }
    setDraggedTask(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAddClick={openAddModal} filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

      <TaskPanel
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
        onDragStart={onDragStart}
        onDrop={onDrop}
      />

      <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} task={editingTask} />

      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        task={deletingTask}
      />
    </div>
  )
}

