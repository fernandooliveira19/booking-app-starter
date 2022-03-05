import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentType'
})
export class PaymentTypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'PIX':
          return 'Pix'
          break;
      case 'SITE':
        return 'Site'
          break;
      case 'TRANSFER':
        return 'Transferência'
          break;
      case 'DEPOSIT':
        return 'Depósito'
          break;
      case 'LOCAL':
        return 'Local'
          break;
      default:
          return '';
          break;
      }
    }
}
