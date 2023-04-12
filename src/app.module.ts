import { CacheModule, Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";

import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";

import { ConfigModule } from "@nestjs/config";
import { TransformInterceptor } from "./common/interceptors/transform.interceptor";
import { getConfig } from "./utils";
import { IntercepterModule } from "./core/intercepter.module";
import * as redisStore from "cache-manager-redis-store";

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getConfig("REDIS_CONFIG").host,
      port: getConfig("REDIS_CONFIG").port,
      db: getConfig("REDIS_CONFIG").db,
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    AuthModule,
    IntercepterModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
