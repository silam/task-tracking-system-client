export default task

function task(task){
    if ( task !== undefined )
    {
        this._id = task._id;
        this.title = task.title;
        this.description = task.description;
        this.steps = task.steps;
        this.version = task.version;
        this.priority = task.priority;
        this.owner = task.owner;
        this.creator = task.creator;
        this.datetime = task.datetime;

    }
}