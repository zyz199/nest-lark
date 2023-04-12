import { CreateSystemDto, DeleteSystemDto, UpdateSystemDto } from './system.dto';
import { SystemService } from './system.service';
export declare class SystemController {
    private readonly systemService;
    constructor(systemService: SystemService);
    create(dto: CreateSystemDto, user: Payload): Promise<import("./system.mysql.entity").System>;
    update(dto: UpdateSystemDto): Promise<import("./system.mysql.entity").System>;
    delete(dto: DeleteSystemDto): Promise<import("typeorm").DeleteResult>;
    list(): Promise<import("./system.mysql.entity").System[]>;
}
