/*
 * @Description: 数据库链接配置
 */

import { DataSource, DataSourceOptions } from "typeorm";

import { getConfig } from "@/utils/index";
import { NamingStrategy } from "./naming.strategies";
import { Privilege } from "@/userCenter/privilege/privilege.mysql.entity";
import { Resource } from "@/userCenter/resource/resource.mysql.entity";
import { Role } from "@/userCenter/role/role.mysql.entity";
import { RolePrivilege } from "@/userCenter/role-privilege/role-privilege.mysql.entity";
import { System } from "@/userCenter/system/system.mysql.entity";
import { User } from "@/userCenter/user/user.mysql.entity";
import { UserRole } from "@/userCenter/user-role/user-role.mysql.entity";

const { MYSQL_CONFIG } = getConfig();

const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG,
  NamedNodeMap: new NamingStrategy(),
  //自动注入hmr热更新不能使用，需要手动注入
  // entities: [path.join(__dirname, `../../**/*.${MYSQL_CONFIG.entities}.entity{.ts,.js}`)],
  entities: [Privilege, Resource, Role, RolePrivilege, System, User, UserRole],
};

const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG);

// 数据库注入
export const DatabaseProviders = [
  {
    provide: "MYSQL_DATA_SOURCE",
    useFactory: async () => {
      if (!MYSQL_DATA_SOURCE.isInitialized)
        await MYSQL_DATA_SOURCE.initialize();
      return MYSQL_DATA_SOURCE;
    },
  },
];
