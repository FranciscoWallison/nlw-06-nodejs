import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import { Expose } from "class-transformer";

@Entity("tags")
class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @Expose({ name: "name_custom" })
    nameCustom(): string {
        return `#${this.name}`;
    }
}

export { Tag };