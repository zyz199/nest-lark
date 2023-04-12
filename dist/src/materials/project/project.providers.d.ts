export declare const projectProviders: {
    provide: string;
    useFactory: (AppDataSource: any) => Promise<any>;
    inject: string[];
}[];
