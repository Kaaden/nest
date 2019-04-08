import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TdModule } from './tdModel/td.module'; //引入文件
// 配置mysql
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

const Orm = (): DynamicModule => {
  const config = new ConfigService();
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: config.databaseHost,
    port: config.databasePort,
    username: config.databaseUserName,
    password: config.databasePassword,
    database: config.databaseName,
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize:true,
  });
};

@Module({
  imports: [TdModule, ConfigModule, Orm()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
