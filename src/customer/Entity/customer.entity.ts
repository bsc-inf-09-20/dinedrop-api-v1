import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    hostel: string;

    @Column()
    roomNumber: string;

    @Column()
    phoneNumber: string;

    @Column()  
    password: string;

}