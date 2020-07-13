class TodoItem {
    constructor(title, points = 1, category = '') {
        this.title = title;
        this.completed = false;
        this.points = points;
        this.category = category;
    }
}

export default TodoItem