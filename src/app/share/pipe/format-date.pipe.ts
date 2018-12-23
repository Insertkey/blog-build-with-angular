import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return this.formatDate(value);
  }

  formatDate(date: number): string {
    const DATE = new Date(date);
    const year = DATE.getFullYear();
    const month = DATE.getMonth() + 1;
    const day = DATE.getDate();
    return `${year}-${month}-${day}`;
  }

}
