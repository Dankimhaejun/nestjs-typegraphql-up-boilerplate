import { Module } from "@nestjs/common";
import { TypeGraphQLModule } from "typegraphql-nestjs";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";

import RecipeModule from "./recipe/module";

const plugins = [
  ApolloServerPluginLandingPageGraphQLPlayground(),
  ApolloServerPluginInlineTrace(),
];

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      validate: false,
      dateScalarMode: "timestamp",
      plugins,
    }),
    RecipeModule,
  ],
})
export class AppModule {}
