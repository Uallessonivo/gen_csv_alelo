import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GetUserByCategoryController } from './get-user-by-category.controller';
import { GetUserByCategoryService } from './get-user-by-category.service';

@Module({
  controllers: [GetUserByCategoryController],
  providers: [GetUserByCategoryService, PrismaService],
})
export class GetUserByCategoryModule {}
