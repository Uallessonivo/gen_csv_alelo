import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GetAdminService {
  constructor(private prisma: PrismaService) {}

  async getAdmin(email: string) {
    try {
      return await this.prisma.superUsers.findFirst({ where: { email } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
