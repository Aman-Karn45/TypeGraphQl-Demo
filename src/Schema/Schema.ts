import {Field,ObjectType,ID} from 'type-graphql'

@ObjectType()
export class IStudent {
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  age: string;
}
