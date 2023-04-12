"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("../../utils/index");
const naming_strategies_1 = require("./naming.strategies");
const privilege_mysql_entity_1 = require("../../userCenter/privilege/privilege.mysql.entity");
const resource_mysql_entity_1 = require("../../userCenter/resource/resource.mysql.entity");
const role_mysql_entity_1 = require("../../userCenter/role/role.mysql.entity");
const role_privilege_mysql_entity_1 = require("../../userCenter/role-privilege/role-privilege.mysql.entity");
const system_mysql_entity_1 = require("../../userCenter/system/system.mysql.entity");
const user_mysql_entity_1 = require("../../userCenter/user/user.mysql.entity");
const user_role_mysql_entity_1 = require("../../userCenter/user-role/user-role.mysql.entity");
const { MYSQL_CONFIG } = (0, index_1.getConfig)();
const MYSQL_DATABASE_CONFIG = Object.assign(Object.assign({}, MYSQL_CONFIG), { NamedNodeMap: new naming_strategies_1.NamingStrategy(), entities: [privilege_mysql_entity_1.Privilege, resource_mysql_entity_1.Resource, role_mysql_entity_1.Role, role_privilege_mysql_entity_1.RolePrivilege, system_mysql_entity_1.System, user_mysql_entity_1.User, user_role_mysql_entity_1.UserRole] });
const MYSQL_DATA_SOURCE = new typeorm_1.DataSource(MYSQL_DATABASE_CONFIG);
exports.DatabaseProviders = [
    {
        provide: "MYSQL_DATA_SOURCE",
        useFactory: async () => {
            if (!MYSQL_DATA_SOURCE.isInitialized)
                await MYSQL_DATA_SOURCE.initialize();
            return MYSQL_DATA_SOURCE;
        },
    },
];
//# sourceMappingURL=database.providers.js.map