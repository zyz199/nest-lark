import { SystemService } from "../system/system.service";
import { ResourceService } from "../resource/resource.service";
import { CreatePrivilegeDto, DeletePrivilegeDto, DisablePrivilegeDto, ListAllPrivilegeDto, PrivilegeListWithPaginationDto, UpdatePrivilegeDto } from "./privilege.dto";
import { Privilege } from "./privilege.mysql.entity";
import { PrivilegeService } from "./privilege.service";
export declare class PrivilegeController {
    private readonly privilegeService;
    private readonly resourceService;
    private readonly systemService;
    constructor(privilegeService: PrivilegeService, resourceService: ResourceService, systemService: SystemService);
    create(dto: CreatePrivilegeDto): Promise<Privilege>;
    update(dto: UpdatePrivilegeDto): Promise<Privilege>;
    changeStatus(dto: DisablePrivilegeDto): Promise<Privilege>;
    delete(dto: DeletePrivilegeDto): Promise<import("typeorm").DeleteResult>;
    listWithPagination(dto: PrivilegeListWithPaginationDto): Promise<{
        items: Privilege[];
        meta: CustomPaginationMeta;
        links?: import("nestjs-typeorm-paginate").IPaginationLinks;
    }>;
    list(dto: ListAllPrivilegeDto): Promise<Privilege[]>;
}
