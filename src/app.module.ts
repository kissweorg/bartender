import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

const buildDatabaseUrl = () => {
  const host = process.env.DATABASE_HOST;
  const port = process.env.DATABASE_PORT;
  const name = process.env.DATABASE_NAME;
  const user = process.env.DATABASE_USER;
  const password = process.env.DATABASE_PWD;
  return `mongodb://${user}:${password}@${host}:${port}/${name}?authSource=admin`;
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(buildDatabaseUrl()),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
