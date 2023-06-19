import { Column, CreateDateColumn, Entity, OneToMany,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contact.entity";



@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({unique:true})
    username: string

    @Column({length: 60})
    first_name: string

    @Column({length: 60})
    last_name: string

    @Column({length: 60, unique: true})
    email: string

    @Column({type: "date"})
    birthdate: Date

    @Column({length: 150})
    password: string

    @Column({length: 18})
    telephone: string

    @Column({ nullable:true})
    profile_img: string

    @CreateDateColumn({type: 'date'})
    created_at: string

    @UpdateDateColumn({type: 'date'})
    updated_at: string

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]

    

}

export {Client}