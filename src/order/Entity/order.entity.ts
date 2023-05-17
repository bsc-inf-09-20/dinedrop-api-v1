import { Column, Entity,} from "typeorm";
@Entity()
export class Orders {

    @Column()
    username: string;

    @Column()
    meal: string;

    @Column()
    price: number;
}