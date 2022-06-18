import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  async createUser(
    cpf: string,
    category: string,
    serial: string,
    name: string,
  ) {
    const userExists = await this.prisma.user.findFirst({
      where: { cpf },
    });

    if (userExists) {
      throw new BadRequestException(
        `User ${name} already exists. But the others users were created.`,
      );
    }

    await this.prisma.user.create({
      data: {
        name,
        cpf,
        category,
        serial,
      },
    });
  }
}
