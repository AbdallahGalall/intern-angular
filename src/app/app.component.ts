import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNameComponent } from './my-name/my-name.component';
import { GoalsHobbiesComponent } from './goals-hobbies/goals-hobbies.component';
import { MyYearComponent } from './my-year/my-year.component';
import { TechComponent } from './tech/tech.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyNameComponent,GoalsHobbiesComponent,MyYearComponent,TechComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'intern-angular';
}
