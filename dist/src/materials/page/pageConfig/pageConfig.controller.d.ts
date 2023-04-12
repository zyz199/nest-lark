import { PageConfigService } from './pageConfig.service';
import { PageService } from '../page.service';
import { CreatePageConfigDto, SearchPageConfigDto } from './pageConfig.dto';
export declare class PageConfigController {
    private readonly pageConfigService;
    private readonly pageService;
    constructor(pageConfigService: PageConfigService, pageService: PageService);
    create(createPageConfigDto: CreatePageConfigDto, user: any): Promise<any>;
    findByPageId(searchPageConfigDto: SearchPageConfigDto): Promise<import("./pageConfig.mysql.entity").PageConfig[]>;
}
