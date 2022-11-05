import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contractType'
})
export class ContractTypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
   
    switch (value) {
      case 'SITE':
          return 'Site'
          break;
      case 'DIRECT':
        return 'Direto com viajante'
          break;
      default:
          return '';
          break;
      }
  }

}