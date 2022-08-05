import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsPositive()
  age: number;
}
