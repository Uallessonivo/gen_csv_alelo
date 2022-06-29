import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateAdminController } from './update-admin.controller';
import { UpdateAdminService } from './update-admin.service';

@Module({
  controllers: [UpdateAdminController],
  providers: [UpdateAdminService, PrismaService],
})
export class UpdateAdminModule {}
