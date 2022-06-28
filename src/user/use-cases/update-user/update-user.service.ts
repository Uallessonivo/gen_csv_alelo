import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(private prisma: PrismaService) {}

  async update(id: string, data: UpdateUserDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }
}
