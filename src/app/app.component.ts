import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)])
  });

  add() {
    console.log(this.addForm)
  }
}
