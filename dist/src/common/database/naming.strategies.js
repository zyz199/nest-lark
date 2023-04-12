"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingStrategy = void 0;
const typeorm_1 = require("typeorm");
const StringUtils_1 = require("typeorm/util/StringUtils");
class NamingStrategy extends typeorm_1.DefaultNamingStrategy {
    tableName(className, customName) {
        return customName ? customName : (0, StringUtils_1.snakeCase)(className);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return ((0, StringUtils_1.snakeCase)(embeddedPrefixes.concat("").join("_")) +
            (customName ? customName : (0, StringUtils_1.snakeCase)(propertyName)));
    }
    relationName(propertyName) {
        return (0, StringUtils_1.snakeCase)(propertyName);
    }
    joinColumnName(relationName, referencedColumnName) {
        return (0, StringUtils_1.snakeCase)(relationName + "_" + referencedColumnName);
    }
    joinTableName(firstTableName, secondTableName, firstPropertyName, secondPropertyName) {
        return (0, StringUtils_1.snakeCase)(`${firstTableName}_${firstPropertyName.replace(/\./gi, "_")}_${secondTableName}`);
    }
    joinTableColumnName(tableName, propertyName, columnName) {
        return (0, StringUtils_1.snakeCase)(tableName + "_" + (columnName ? columnName : propertyName));
    }
    classTableInheritanceParentColumnName(parentTableName, parentTableIdPropertyName) {
        return (0, StringUtils_1.snakeCase)(parentTableName + "_" + parentTableIdPropertyName);
    }
    eagerJoinRelationAlias(alias, propertyPath) {
        return alias + "__" + propertyPath.replace(".", "_");
    }
}
exports.NamingStrategy = NamingStrategy;
//# sourceMappingURL=naming.strategies.js.map