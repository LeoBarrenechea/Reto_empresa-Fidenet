import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
    if (data.socialMedia.length > 0)
      await this.usersModel.updateOne({username: username}, {$set: {socialMedia: data.socialMedia}});
    if (data.info)
      await this.usersModel.updateOne({username: username}, {$set: {info: data.info}});
    if (data.image)
      await this.usersModel.updateOne({username: username}, {$set: {image: data.image}});
    if (data.knowledges.length > 0)
      await this.usersModel.updateOne({username: username}, {$set: {knowledges: data.knowledges}});
    if (data.job)
      await this.usersModel.updateOne({username: username}, {$set: {job: data.job}});
      
    return await this.usersModel.find({username: username});
  }
}



