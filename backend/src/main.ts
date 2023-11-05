import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {SeederService} from "./database/seeds/seeder.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const seeder = app.get(SeederService);
    await seeder.seed();
    app.enableCors(
        {
            origin: 'http://localhost:3001',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'Content-Type, Accept',
        }
    )
    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('The NestJS API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}

bootstrap();
