export default function Header({ onAddClick, filter, setFilter, sort, setSort }) {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flew-row md:items-center md:justify-between gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
                    <div className="flex flex-wrap items-center gap-3">
                        <select value={filter.priority}
                            onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none" >
                            <option value="">All Priorities</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <select value={filter.status}
                            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none">
                            <option value="">All Statuses</option>
                            <option value="To-Do">To-Do</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                        </select>

                        <select value={sort} onChange={(e) => setSort(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="dueDate">In Due</option>
                        </select>

                        <button
                            onClick={onAddClick}
                            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
                            + Add Task
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
