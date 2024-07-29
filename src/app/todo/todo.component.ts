import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: { text: string, completed: boolean }[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleCompletion(todo: { text: string, completed: boolean }) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todoToDelete: { text: string, completed: boolean }) {
    this.todos = this.todos.filter(todo => todo !== todoToDelete);
  }
}
