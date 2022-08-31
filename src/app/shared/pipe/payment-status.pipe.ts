import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
   
    switch (value) {
      case 'PAID':
          return 'Pago'
          break;
      case 'PENDING':
        return 'Pendente'
          break;
      case 'CANCELED':
        return 'Cancelado'
          break;
      default:
          return '';
          break;
      }
  }

}
