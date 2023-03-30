import {
  Body,
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Res,
  HttpStatus,
  Put,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(@Body() body: any, @Res() res: any): Promise<any> {
    console.log("post del controller");  
    console.log(body);
    let response = "";
    let user = await this.usersService.addUser(body);
    if (user.email !== body.email && user.username !== body.username)
    {
       return res.status(HttpStatus.CREATED).send({msg:'usuario creado'});
    }
    else{
        console.log(user);
        
        if (user.email === body.email)
           response += res.status(HttpStatus.CONFLICT).send({msg: `${user.email} ya esta siendo utilizado`})
        if (user.username === body.username)
           response += res.status(HttpStatus.CONFLICT).send({msg: `${user.username} no esta disponible`})
        console.log(response);
        return response;
    }
  }

  @Get('all')
  async showUsers(){
    return await this.usersService.showUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async traerUser(@Request() req: any) {
    return await this.usersService.mostrarUser(req.user.username);
  }

  @Get()
    async findUser(@Body() username: any) {
        return await this.usersService.findUser(username);
    }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  async updateUser(@Req() req: any,@Body() data: any, @Res() res: any) {

      let user = await this.usersService.findUser(req.user.username)
      console.log("update");
      console.log(data);
      console.log(user);
      
      if (user)
      {
          await this.usersService.updateUser(req.user.username, data);
          res.status(HttpStatus.OK).send({msg: 'datos modificados correctamente'}); 
      
      }
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('updatesearch')
  async updateSearch(@Body() data: any){
    
    let user = await this.usersService.updateSearches(data);
  console.log(user);
      
    if (!user || user[0].searches.length >= 1)
    {
      return {msg: 'no guardado'};
    }
    else if (user[0].searches.length >= 3)
    {
      return {msg: 'no guardado por exceso de busquedas'};
    }
    else{
      return {msg: 'exitosamente guardado'};
    }
  }
}
