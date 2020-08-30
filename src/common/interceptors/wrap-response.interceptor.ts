import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before ...')
    // data here is response returned from endpoint
    // return next.handle().pipe(tap(data => console.log( 'After ...', data)));
    return next.handle().pipe(map(responsePayload => ({responsePayload})));
  }
}