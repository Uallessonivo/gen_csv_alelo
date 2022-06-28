import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserController } from './update-user.controller';
import { UpdateUserService } from './update-user.service';

@Module({
  controllers: [UpdateUserController],
  providers: [UpdateUserService, PrismaService],
})
export class UpdateUserModule {}
