import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUsersFromFileController } from './create-users-fromfile.controller';
import { CreateUsersFromFileService } from './create-users-fromfile.service';

@Module({
  controllers: [CreateUsersFromFileController],
  providers: [CreateUsersFromFileService, PrismaService],
})
export class CreateUsersFromFileModule {}
