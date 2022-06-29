import { Module } from '@nestjs/common';
import { CreateAdminService } from './create-admin.service';
import { CreateAdminController } from './create-admin.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CreateAdminController],
  providers: [CreateAdminService, PrismaService],
})
export class CreateAdminModule {}
