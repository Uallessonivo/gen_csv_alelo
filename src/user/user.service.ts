import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../database/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        cpf: data.cpf,
      },
    });

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    return await this.prisma.user.create({ data });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

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

  async delete(id: string) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.user.delete({ where: { id } });

    return { message: 'User deleted' };
  }
}
