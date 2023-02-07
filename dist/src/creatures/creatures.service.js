"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreaturesService = void 0;
const common_1 = require("@nestjs/common");
const update_creature_dto_1 = require("./dto/update-creature.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let CreaturesService = class CreaturesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCreatureDto) {
        return this.prisma.creature.create({ data: createCreatureDto });
    }
    findExtinct() {
        return this.prisma.creature.findMany({ where: { extinct: true } });
    }
    findOne(id) {
        return this.prisma.creature.findUnique({ where: { id } });
    }
    update(id, updateCreatureDto) {
        return this.prisma.creature.update({
            where: { id },
            data: update_creature_dto_1.UpdateCreatureDto,
        });
    }
    remove(id) {
        return `This action removes a #${id} creature`;
    }
};
CreaturesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreaturesService);
exports.CreaturesService = CreaturesService;
//# sourceMappingURL=creatures.service.js.map