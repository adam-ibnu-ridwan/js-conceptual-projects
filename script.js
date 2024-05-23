// Todo List
// namaTugas,
// tambahTugas, hapusTugas(), tandaiSelesai()

class TodoList {
  constructor(person) {
    this.person = person;
    this.tasks = [];
  }

  addTask(task) {
    // [C]reate
    let isSame = this.tasks.find((e) => e.task == task);

    if (isSame == undefined) {
      this.tasks.push({ task, status: "not cleared" });
    } else {
      console.error("This task have created!");
    }
  }

  myTasks() {
    // [R]EAD
    this.tasks.forEach((e) => {
      console.log(e);
    });
  }

  editTask(task, newTask) {
    // [U]pdate
    let index = this.tasks.findIndex((e) => e.task == task);
    if (index > -1) {
      // apakah task sama dengan task lainnya?
      let isSame = this.tasks.find((e) => e == newTask);

      if (isSame == undefined) {
        this.tasks[index].task = newTask;
      } else {
        console.error("This task have created!");
      }
    } else {
      console.error("This task is not found!");
    }
  }

  deleteTask(task) {
    // [D]elete
    let newTasks = this.tasks.filter((e) => e.task !== task);
    if (newTasks.length > 0) {
      this.tasks = newTasks;
    } else {
      console.error("This task is not found!");
    }
  }

  markAsCleared(task) {
    let index = this.tasks.findIndex((e) => e.task == task);
    if (index > -1) {
      this.tasks[index].status = "cleared";
    } else {
      console.error("This task is not found!");
    }
  }
}

// Practice
const Adam = new TodoList("Adam");
Adam.addTask("menghafal juz 10");
Adam.addTask("menghafal juz 2");
Adam.addTask("menghafal juz 15");
Adam.markAsCleared("menghafal juz 1");
Adam.deleteTask("menghafal juz 15");
Adam.myTasks();
