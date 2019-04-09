import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee';
import { ConfigModule } from './config';
import { testModule } from './graphql-test';
// import { ScalarsModule } from './scalars';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    testModule,
    ConfigModule,
    EmployeeModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
