import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platformNameResolver'
})
export class PlatformNameResolverPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(" ").filter(word => /\w/.test(word)).join("-");
  }
}