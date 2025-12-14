export default function TaskCard({ task, onEdit, onDelete, onDragStart }) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(task)}
      className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow cursor-move"
    >
      <h3 className="font-semibold text-gray-900 mb-2">{task.title}</h3>

      {task.description && <p className="text-sm text-gray-600 mb-3">{task.description}</p>}

      <div className="flex items-center justify-between mb-3">
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium">{task.priority}</span>
        {task.dueDate && <span className="text-xs text-gray-500">Due: {task.dueDate}</span>}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 px-3 py-1.5 bg-gray-900 text-white rounded text-sm hover:bg-gray-800 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task)}
          className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}


