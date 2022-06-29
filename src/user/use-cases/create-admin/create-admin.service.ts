import { BadRequestException, Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { CreateSuperUserDto } from './dto/admin.create.dto';

@Injectable()
export class CreateAdminService {
  constructor(private prisma: PrismaService) {}

  async createSuperUser(data: CreateSuperUserDto) {
    const userExists = await this.prisma.superUsers.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    await this.prisma.superUsers.create({
      data: {
        password: hashSync(data.password, 10),
        email: data.email,
        name: data.name,
      },
    });
  }
}
