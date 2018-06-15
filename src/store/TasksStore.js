/**
 * Used to share data between components
 * Utilisé pour partager les données entre les composants
 */
class TasksStore {
    constructor () {
        this.state = {
            tasks: []
        }
    }

    add (name, description) {
        this.state.tasks.push(new Task(name, description))
    }

    clear () {
        this.state.tasks = []
    }
}

/**
 * Represents a task
 * Represente une tâche
 */
class Task {
    constructor (name, description) {
        this.name = name
        this.description = description
        this.isDone = false
    }
}

export default new TasksStore()