import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import {environment} from "./environments/environment";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.PORT);
  console.log(`Listen on port: ${environment.PORT}`);
}

bootstrap();
