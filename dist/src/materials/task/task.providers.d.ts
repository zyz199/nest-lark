export declare const TaskProviders: {
    provide: string;
    useFactory: (AppDataSource: any) => Promise<any>;
    inject: string[];
}[];
