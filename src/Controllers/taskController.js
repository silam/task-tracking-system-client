import taskModel from "../Models/taskModels";

export function retrieveTasks()
{
    let data = [];

    data.push( new taskModel ({
        _id: 123456789,
        title: 'Exceptions on loading tasks',
        description: 'Exceptions when a lot of data is loaded',
        steps: "Click on submit to load tasks",
        version: "1.0.0.0",
        owner: "Si Lam",
        creator: "Mike Smith",
        priority: 1,
        datetime: "2013-04-23 10:10:10",


    }));

    data.push( new taskModel ({
        _id: 123456788,
        title: 'Long time on loading tasks',
        description: 'Long time when a lot of data is loaded',
        steps: "Click on submit to load tasks",
        version: "1.0.0.0",
        owner: "Si Lam",
        creator: "Mike Smith",
        priority: 2,
        datetime: "2013-04-23 09:10:10",


    }));


    let sorted = data.sort((a,b)=>{return a.priority - b.priority});

    return sorted;
}