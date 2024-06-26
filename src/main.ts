import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function start() {
    const PORT = process.env.PORT || 9000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('BACKEND для TO-DO листа')
        .setDescription('Общая документация')
        .setVersion('1.0.0')
        .addTag('My TO-DO')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

}

start()