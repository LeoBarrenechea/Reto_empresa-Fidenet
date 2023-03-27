import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    birthday: string;
    
    @Prop()
    socialMedia: string[];
    
    @Prop()
    info: string;
    
    @Prop()
    knowledges: string[];

    @Prop()
    job: string;

    @Prop()
    image: string; 
    
    @Prop({ unique: true, required: true })
    email: string;
    
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;
  }

export const UserSchema = SchemaFactory.createForClass(User);
