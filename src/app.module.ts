import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FileHandlerModule } from './file-handlers/file.handler.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    UserModule,
    FileHandlerModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
