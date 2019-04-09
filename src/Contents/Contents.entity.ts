import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  authors: string;

  @Column()
  content: string;

  @Column()
  time: Date;

  @Column()
  img: string;

  @Column()
  status: number;

  @Column()
  description: string;
}
