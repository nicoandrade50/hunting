import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CreaturesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCreatureDto: CreateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<import(".prisma/client").Creature, never>;
    findExtinct(): import(".prisma/client").PrismaPromise<import(".prisma/client").Creature[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CreatureClient<import(".prisma/client").Creature, never>;
    update(id: number, updateCreatureDto: UpdateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<import(".prisma/client").Creature, never>;
    remove(id: number): string;
}
