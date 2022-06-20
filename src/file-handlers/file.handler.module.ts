import { Module } from '@nestjs/common';
import { CreateUsersFromFileModule } from './use-cases/create-Users-FromFile/create-users-fromfile.module';
import { GenFileModule } from './use-cases/gen-file/gen-file.module';

@Module({
  imports: [CreateUsersFromFileModule, GenFileModule],
  controllers: [],
  providers: [],
})
export class FileHandlerModule {}
