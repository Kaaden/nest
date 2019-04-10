import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { testModule } from './graphql-test';

import { GraphQLModule } from '@nestjs/graphql';

import { ContentsModule } from './Contents';
@Module({
  imports: [
    ConfigModule,
    ContentsModule,
    testModule,
    GraphQLModule.forRoot({
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
