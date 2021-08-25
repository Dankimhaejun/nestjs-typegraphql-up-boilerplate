import { Module } from "@nestjs/common";
import { TypeGraphQLModule } from "typegraphql-nestjs";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";

import RecipeModule from "./recipe/module";

const plugins = [
  ApolloServerPluginLandingPageGraphQLPlayground({ title: "Hello" }),
  ApolloServerPluginInlineTrace(),
];

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      validate: false,
      dateScalarMode: "timestamp",
      plugins,
      // debug: true,
      // introspection: true,
      // context: ({ req }) => ({ currentUser: req.user }),
    }),
    RecipeModule,
  ],
})
export class AppModule {}
