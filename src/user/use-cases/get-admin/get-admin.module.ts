import { Module } from '@nestjs/common';
import { GetAdminService } from './get-admin.service';
import { GetAdminController } from './get-admin.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [GetAdminController],
  providers: [GetAdminService, PrismaService],
})
export class GetAdminModule {}
