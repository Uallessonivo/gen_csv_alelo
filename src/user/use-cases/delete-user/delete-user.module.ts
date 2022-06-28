import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeleteUserController } from './delete-user.controller';
import { DeleteUserService } from './delete-user.service';

@Module({
  controllers: [DeleteUserController],
  providers: [DeleteUserService, PrismaService],
})
export class DeleteUserModule {}
