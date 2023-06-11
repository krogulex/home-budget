import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  username: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  salt: string;
}
