import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserSerializer } from 'src/common/decorator/UserSerializer';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.userService.findUserByEmail(email);

    if (user) {
      const isMatch = await this.userService.passwordVerification(
        user,
        password,
      );

      if (isMatch) return user;
      else throw new BadRequestException('비밀번호가 일치하지 않습니다.');
    }

    throw new NotFoundException('존재하지 않는 이메일 입니다.');
  }
}
