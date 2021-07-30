import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionsModule } from './regions/regions.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      MongooseModule.forRoot(process.env.DBCONN),
      RegionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
