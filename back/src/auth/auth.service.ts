import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.mostrarUser(username);
    const coincidence = bcrypt.compareSync(pass, user.password);
    console.log(coincidence);
    
    if (user && coincidence) {
      console.log(coincidence);
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async login(user: any) {
    console.log(user);
    const payload = { username: user.username, sub: user.userId };
    console.log(payload);

    const token = this.jwtService.sign(payload);

    return {
      user: payload,
      access_token: token,
    };
  }
}
