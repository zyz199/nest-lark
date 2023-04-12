import { CreateResourceDto, DeleteResourceDto, ListBySystemIdDto, UpdateResourceDto } from './resource.dto';
import { ResourceService } from './resource.service';
export declare class ResourceController {
    private readonly resourceService;
    constructor(resourceService: ResourceService);
    create(dto: CreateResourceDto): Promise<import("./resource.mysql.entity").Resource>;
    update(dto: UpdateResourceDto): Promise<import("./resource.mysql.entity").Resource>;
    delete(dto: DeleteResourceDto): Promise<import("typeorm").DeleteResult>;
    listBySystemId(dto: ListBySystemIdDto): Promise<import("./resource.mysql.entity").Resource[]>;
}
