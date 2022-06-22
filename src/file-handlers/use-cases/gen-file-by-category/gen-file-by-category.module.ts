import { Module } from '@nestjs/common';
import { GenFileByCategoryService } from './gen-file-by-category.service';
import { GenFileByCategoryController } from './gen-file-by-category.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [GenFileByCategoryController],
  providers: [GenFileByCategoryService, PrismaService],
})
export class GenFileByCategoryModule {}
