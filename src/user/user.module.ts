import { Module } from '@nestjs/common';
import { CreateUserModule } from './use-cases/create-user/create-user.module';
import { DeleteUserModule } from './use-cases/delete-user/delete-user.module';
import { GetUserByNameModule } from './use-cases/get-user-by-name/get-user-by-name.module';
import { GetUserModule } from './use-cases/get-user/get-user.module';
import { GetUserByCategoryModule } from './use-cases/get-users-by-category/get-user-by-category.module';
import { GetUsersModule } from './use-cases/get-users/get-users.module';
import { UpdateUserModule } from './use-cases/update-user/update-user.module';

@Module({
  imports: [
    CreateUserModule,
    GetUserByNameModule,
    GetUsersModule,
    UpdateUserModule,
    DeleteUserModule,
    GetUserModule,
    GetUserByCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class UserModule {}
