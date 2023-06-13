import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  constructor(username: string, email: string, password: string, salt: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.salt = salt;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 20 })
  username: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  salt: string;
}
