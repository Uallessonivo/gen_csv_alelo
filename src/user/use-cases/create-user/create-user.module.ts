import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserController } from './create-user.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService, PrismaService],
})
export class CreateUserModule {}
