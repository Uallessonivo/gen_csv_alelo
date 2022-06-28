import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GetUsersController } from './get-users.controller';
import { GetUsersService } from './get-users.service';

@Module({
  controllers: [GetUsersController],
  providers: [GetUsersService, PrismaService],
})
export class GetUsersModule {}
