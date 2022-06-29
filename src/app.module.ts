import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FileHandlerModule } from './file-handlers/file.handler.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    FileHandlerModule,
    MulterModule.register({
      dest: './uploads',
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
