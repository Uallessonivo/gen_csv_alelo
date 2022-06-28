import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GetUserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    return userExists;
  }
}
