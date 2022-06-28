import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GetUserByCategoryService {
  constructor(private prisma: PrismaService) {}

  async findByCategory(category: string) {
    const users = await this.prisma.user.findMany({
      where: {
        category,
      },
    });

    if (users.length === 0) {
      throw new NotFoundException('Nothing found in this category');
    }

    return users;
  }
}
