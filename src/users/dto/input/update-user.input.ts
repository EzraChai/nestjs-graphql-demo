import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  userId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  @IsPositive()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}
