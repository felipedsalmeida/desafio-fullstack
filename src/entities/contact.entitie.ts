import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entitie";



@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    img: string

    @Column()
    telephone: string

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @ManyToOne(() => Client)
    client: Client
}

export {Contact}