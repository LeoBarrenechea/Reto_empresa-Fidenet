import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async mostrarUser(username: string): Promise<any> {
    return await this.usersModel.findOne({ username: username }).lean();
  
  }

  async agregarUser(user: User): Promise<any> {
    return await this.usersModel.create(user);
  }

  async showUsers(){
    return await this.usersModel.find();
  }

  async addUser(user: any): Promise<any> {
    console.log("service Post owner");
    let userDb = await this.usersModel.collection.findOne({ $or: [{email: user.email}, {username: user.username}]})
    console.log(userDb);
    if (!userDb)
    {
        user.password = bcrypt.hashSync(user.password, 10);
        console.log(user.password);
        return await this.usersModel.collection.insertOne(user);
    }
    else{
        return userDb;
    }
  }

  async findUser(username: any): Promise<any | undefined> {
    console.log(username);
    return this.usersModel.find({username});
  }

  async updateUser(username:string, data: any) {
    console.log(data)
    if (data.phoneNumber)
      await this.usersModel.updateOne({username: username}, {$set: {phoneNumber: data.phoneNumber}});
    if (data.birthday)
      await this.usersModel.updateOne({username: username}, {$set: {birthday: data.birthday}});
    if (data.info)
      
    return await this.usersModel.find({username: username});
  }

  async updateSearches(data:any, req:any){
    if (data.value && req.user.username)
    {
      let user = await this.usersModel.find({username: req.user.username})
      console.log(user);
      
      
      if (!user)
      {
        return null;
      }

      /* else if (user[0].searches.length +1 > 3 && user[0].typeAcc === 'free')
      {
        return 3;
      } */

      else
      {
        await this.usersModel.updateOne({username: req.user.username}, {$push: {searches: data.value}})
        return "ok";
      }
    }
  }

  async FindSearch(search: any, req: any) {
    let user = this.usersModel.find({username: req.user.username});

    if (user)
    {
      for (let i = 0; i < user[0].searches.length; i++)
      {
        if (user[0].searches[i] === search)
        {
          return user[0].searches[i];
        }
      }
    }

    else
    {
      return {msg: 'no funciona'};
    }
  }
}



