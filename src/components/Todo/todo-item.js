class TodoItem {
    constructor(title, points = 1) {
        this.title = title;
        this.completed = false;
        this.points = points;
    }
}

export default TodoItem