import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UserSerializer implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((value) => {
        if (value !== null) {
          if ('user' in value) {
            value.user.password = undefined;
            value.user.refreshToken = undefined;
          } else {
            value.password = undefined;
            value.refreshToken = undefined;
          }
        }

        return value;
      }),
    );
  }
}
