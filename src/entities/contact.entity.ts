import { Column, CreateDateColumn, Entity,  ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./client.entity";



@Entity('contacts')
class Contact {
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

    @Column({length: 18})
    telephone: string

    @Column({nullable:true})
    profile_img: string

    @CreateDateColumn({type: 'date'})
    created_at: Date

    @UpdateDateColumn({type: 'date'})
    updated_at: Date

   
    
    @ManyToOne(() => Client, {
        onDelete: "CASCADE"
    })
    client: Client
}

export {Contact}