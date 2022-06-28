import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GetUserByNameService {
  constructor(private prisma: PrismaService) {}

  async findByName(name: string) {
    const userExists = await this.prisma.user.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    return userExists;
  }
}
