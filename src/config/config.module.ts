import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
const config = new ConfigService();
@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.databaseHost,
      port: config.databasePort,
      username: config.databaseUserName,
      password: config.databasePassword,
      database: config.databaseName,
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
