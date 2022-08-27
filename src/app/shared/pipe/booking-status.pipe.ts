import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingStatus'
})
export class BookingStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    switch (value) {
      case 'RESERVED':
          return 'Reservado'
          break;
      case 'PRE_RESERVED':
        return 'Pré-Reservado'
          break;
      case 'CANCELED':
        return 'Cancelado'
          break;
      case 'CURRENT_BOOKING':
        return 'Estadia Atual'
          break;
      case 'FINISHED':
        return 'Finalizado'
          break;
      default:
          return '';
          break;
      }
  }

}
