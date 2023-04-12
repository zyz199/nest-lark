import { DataSource } from "typeorm";
export declare const DatabaseProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
