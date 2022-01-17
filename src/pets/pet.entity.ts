import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  type?: string;

  @Column()
  @Field(() => Int)
  ownerId: number;

  @Field(() => Owner)
  @ManyToOne(() => Owner, (owner) => owner.pets)
  owner: Owner;
}
