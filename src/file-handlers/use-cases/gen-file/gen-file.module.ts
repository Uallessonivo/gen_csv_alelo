import { Module } from '@nestjs/common';
import { GenFileService } from './gen-file.service';
import { GenFileController } from './gen-file.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [GenFileController],
  providers: [GenFileService, PrismaService],
})
export class GenFileModule {}
