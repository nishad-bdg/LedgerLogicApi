import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @IsNotEmpty({ message: 'Customer name is required' })
  @IsString({ message: 'Customer name must be string' })
  @Field()
  customerName: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be string' })
  @Field()
  email: string;

  @IsNotEmpty({ message: 'Mobile no is required' })
  @IsInt({ message: 'Mobile number must be string' })
  @Field()
  mobileNo: number;

  @Field()
  creditLimit: number;

  @Field()
  isBlocked: boolean;
}
