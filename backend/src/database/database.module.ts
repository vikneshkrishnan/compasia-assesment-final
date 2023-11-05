import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService:ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DATABASE'),
                autoLoadEntities: true,
                synchronize: configService.get('POSTGRES_SYNCHRONIZE'),
                seeds: [__dirname + '/seeds/**/*{.ts,.js}'],
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}