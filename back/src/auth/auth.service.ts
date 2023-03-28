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
    
    if (!user)
    {
      console.log("no existe usuario");
      return {msg: "no username"};
    }
    
    const coincidence = bcrypt.compareSync(pass, user.password);
    console.log(coincidence);
    
    if (user && coincidence) {
      console.log("ambos coinciden");
      const { password, ...result } = user;
      return result;
    }

    else if(!coincidence)
      return {msg: "contraseña incorrecta"};
    else
      return null;
  }
  
  async login(user: any) {
    console.log(user);
    if (user.username)
    {
      const payload = { username: user.username, sub: user.userId };      
      const token = this.jwtService.sign(payload);
      
      return {
        user: payload,
        access_token: token,
      };
    }
    else
      return user;
  }
}
