import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
export declare class CreaturesController {
    private readonly creaturesService;
    constructor(creaturesService: CreaturesService);
    create(createCreatureDto: CreateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<import(".prisma/client").Creature, never>;
    findExtinct(): import(".prisma/client").PrismaPromise<import(".prisma/client").Creature[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CreatureClient<import(".prisma/client").Creature, never>;
    update(id: string, updateCreatureDto: UpdateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<import(".prisma/client").Creature, never>;
    remove(id: string): string;
}
