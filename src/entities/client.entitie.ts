import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entitie";



@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    telephone: string

    @Column()
    img: string

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]

}

export {Client}