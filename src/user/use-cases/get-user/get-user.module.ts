import { Module } from '@nestjs/common';
import { GetUserController } from './get-user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { GetUserService } from './get-user.service';

@Module({
  controllers: [GetUserController],
  providers: [GetUserService, PrismaService],
})
export class GetUserModule {}
