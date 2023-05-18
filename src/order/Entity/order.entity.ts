import { Column, Entity, PrimaryColumn,} from "typeorm";
@Entity()
export class Orders {

    @PrimaryColumn()
    username: string;

    @Column()
    meal: string;

    @Column()
    price: number;
}