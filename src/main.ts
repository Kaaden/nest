import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// import { ConfigService } from './config/config.service';
async function bootstrap() {
  try{
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
  }catch(err){
    console.log(err)
  }
}
bootstrap();
