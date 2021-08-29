import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platformNameResolver'
})
export class PlatformNameResolverPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
