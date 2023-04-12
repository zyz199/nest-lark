import { addPageDto } from './page.dto';
import { PageService } from './page.service';
import { ConfigService } from '@nestjs/config';
import { PageConfigService } from './pageConfig/pageConfig.service';
import { DeployConfigService } from './deployConfig/deployConfig.service';
import { ClientProxy } from '@nestjs/microservices';
export declare class PageController {
    private pageService;
    private configService;
    private pageConfigService;
    private deployConfigService;
    private client;
    constructor(pageService: PageService, configService: ConfigService, pageConfigService: PageConfigService, deployConfigService: DeployConfigService, client: ClientProxy);
    save(params: addPageDto): Promise<any>;
    getList(): Promise<import("./page.mysql.entity").Page[]>;
    deploy(params: addPageDto): Promise<any>;
    getDetail(params: addPageDto): Promise<{
        pageConfig: import("./pageConfig/pageConfig.mysql.entity").PageConfig;
        deployConfig: import("./deployConfig/deployConfig.mysql.entity").DeployTestConfig;
        id: number;
        path: string;
        name: string;
        currentConfigId: string;
        deployConfigId: string;
        currentVersion: string;
        deployVersion: string;
        templateId: string;
        type: import("./page.mysql.entity").PAGE_TYPE;
        device: import("./page.mysql.entity").DEVICE_TYPE;
        status: import("./page.mysql.entity").STATUS_TYPE;
        createDate: string;
        updateDate: string;
        appointmentUp: string;
        appointmentDown: string;
    }>;
    getData(): Promise<{
        filePath: string;
    }>;
    updateOne(params: addPageDto): Promise<{
        path: string;
        name: string;
        type: import("./page.mysql.entity").PAGE_TYPE;
        device: import("./page.mysql.entity").DEVICE_TYPE;
        value?: any;
        lastErrorObject?: any;
        ok?: number;
    }>;
}
