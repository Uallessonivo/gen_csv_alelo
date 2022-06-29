import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateSuperUserDto } from './dto/admin.update.dto';

@Injectable()
export class UpdateAdminService {
  constructor(private prisma: PrismaService) {}

  async updateSuperUser(id: string, data: UpdateSuperUserDto) {
    const userExists = await this.prisma.superUsers.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    return await this.prisma.superUsers.update({
      where: { id },
      data,
    });
  }
}
