import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GetUserByNameController } from './get-user-by-name.controller';
import { GetUserByNameService } from './get-user-by-name.service';

@Module({
  controllers: [GetUserByNameController],
  providers: [GetUserByNameService, PrismaService],
})
export class GetUserByNameModule {}
