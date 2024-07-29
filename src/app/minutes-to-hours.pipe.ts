// minutes-to-hours.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
  standalone: true
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(minutes: number): string {
    if (isNaN(minutes) || minutes < 0) {
      return 'Invalid input';
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour${hours !== 1 ? 's' : ''} and ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
  }

}
