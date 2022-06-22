import { Module } from '@nestjs/common';
import { CreateUsersFromFileModule } from './use-cases/create-Users-FromFile/create-users-fromfile.module';
import { GenFileModule } from './use-cases/gen-file/gen-file.module';
import { GenFileByCategoryModule } from './use-cases/gen-file-by-category/gen-file-by-category.module';

@Module({
  imports: [CreateUsersFromFileModule, GenFileModule, GenFileByCategoryModule],
  controllers: [],
  providers: [],
})
export class FileHandlerModule {}
