import { Component } from '@angular/core';
import { MinutesToHoursPipe } from '../minutes-to-hours.pipe';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-minute',
  standalone: true,
  imports: [MinutesToHoursPipe,ChangeColorDirective],
  templateUrl: './minute.component.html',
  styleUrl: './minute.component.css'
})
export class MinuteComponent {
  totalMinutes = 125;
}
