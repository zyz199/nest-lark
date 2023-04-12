export declare const PageProviders: {
    provide: string;
    useFactory: (AppDataSource: any) => Promise<any>;
    inject: string[];
}[];
