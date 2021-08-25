import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import {
  NestFastifyApplication,
  FastifyAdapter,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

declare const module: any;

const isDevelopment = process.env.NODE_ENV === "development";
const port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true }
  );

  await app.listen(port);

  if (isDevelopment) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
    console.log(`Server listening on http://localhost:3005/graphql`);
    console.log(`Port is:`, port);
  }
}

bootstrap();
