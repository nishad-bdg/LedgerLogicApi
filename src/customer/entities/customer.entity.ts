import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field(() => Int)
  id: number;

  @Field()
  customerName: string;

  @Field(() => Int)
  mobileNo: number;

  @Field()
  email: string;

  @Field()
  creditLimit: number;

  @Field()
  isBlocked: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
