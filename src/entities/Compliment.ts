import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
  } from "typeorm";
  import { Tag } from "./Tag";
  import { User } from "./User";
  
  @Entity("compliments")
  class Compliment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    user_sender: string;
    //user cadastrando o elogio
    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    userSender: User;
  
    @Column()
    user_receiver: string;
    //user recebeu elogio 
    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;
  
    @Column()
    tag_id: string;
  
    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;
  
    @Column()
    message: string;
  
    @CreateDateColumn()
    created_at: Date;
  
  }
  
  export { Compliment };