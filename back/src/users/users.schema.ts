import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    searches: string[];

    @Prop()
    typeAcc: string;
    
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;
  }

export const UserSchema = SchemaFactory.createForClass(User);
