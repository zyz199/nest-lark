"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const config_1 = require("@nestjs/config");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const utils_1 = require("./utils");
const intercepter_module_1 = require("./core/intercepter.module");
const redisStore = require("cache-manager-redis-store");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.register({
                isGlobal: true,
                store: redisStore,
                host: (0, utils_1.getConfig)("REDIS_CONFIG").host,
                port: (0, utils_1.getConfig)("REDIS_CONFIG").port,
                db: (0, utils_1.getConfig)("REDIS_CONFIG").db,
            }),
            config_1.ConfigModule.forRoot({
                ignoreEnvFile: true,
                isGlobal: true,
                load: [utils_1.getConfig],
            }),
            auth_module_1.AuthModule,
            intercepter_module_1.IntercepterModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map