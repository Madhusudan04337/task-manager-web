import TaskCard from "./TaskCard"

export default function TaskPanel({ tasks, onEdit, onDelete, onDragStart, onDrop }) {
    const columns = ['To-Do', 'In-Progress', 'Completed']
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {columns.map((status) => (
                    <Column key={status} status={status} tasks={tasks.filter((task) => task.status === status)}
                        onEdit={onEdit} onDelete={onDelete} onDragStart={onDragStart} onDrop={onDrop} />
                ))}
            </div>
        </main>
    )
}

function Column ({status, tasks, onEdit, onDelete, onDragStart, onDrop}){
    function handleDragOver(e){
        e.preventDefault()
    }
    function handleDrop(e){
        e.preventDefault()
        onDrop(status)
    }

    return (
        <div className="bg-white rounded-lg border-2 border-gray-200 p-4" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="bg-gray-100 px-3 py-2 rounded-lg mb-4">
                <h2 className="font-semibold text-sm text-gray-900">
                    {status}({tasks.length})
                </h2>
            </div>

            <div className="space-y-3">
                {tasks.length === 0?(<p className="text-gray-400 text-sm text-center py-8">No tasks</p>):(
                    tasks.map((task)=>(
                        <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onDragStart={onDragStart}/>
                    ))
                )}
            </div>
        </div>
    )
}
