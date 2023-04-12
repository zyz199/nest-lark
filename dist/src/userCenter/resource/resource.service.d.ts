import { Pagination } from 'nestjs-typeorm-paginate';
import { CustomPaginationMeta } from 'src/helper';
import { Repository } from 'typeorm';
import { ResourceListWithPaginationDto } from './resource.dto';
import { Resource } from './resource.mysql.entity';
export declare class ResourceService {
    private resourceRepository;
    constructor(resourceRepository: Repository<Resource>);
    create(resource: Resource): Promise<Resource>;
    update(resource: Resource): Promise<Resource>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findById(id: any): Promise<Resource>;
    findByKey(key: string): Promise<Resource>;
    paginate(searchParams: ResourceListWithPaginationDto, page: PaginationParams): Promise<Pagination<Resource, CustomPaginationMeta>>;
    listBySystemId(systemId: number): Promise<Resource[]>;
}
