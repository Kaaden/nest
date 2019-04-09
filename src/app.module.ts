import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee';
import { ConfigModule } from './config';
import { ScalarsModule } from './scalars';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    ConfigModule,
    EmployeeModule,
    // GraphQLModule.forRoot({
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'schema.gql',
    //   context: ({ req }) => ({ req }),
    // }),
    ScalarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
