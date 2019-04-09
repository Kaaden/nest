import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
const config=new ConfigService()
@Module({
  imports: [
    ConfigModule,
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
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
