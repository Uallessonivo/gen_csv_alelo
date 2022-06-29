import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { SuperUserEntity } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly service: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(superUser: SuperUserEntity) {
    const payload = { sub: superUser.id, email: superUser.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateAdmin(email: string, password: string) {
    let superUser: SuperUserEntity;

    try {
      superUser = await this.service.superUsers.findFirst({ where: { email } });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, superUser.password);

    if (!isPasswordValid) {
      return null;
    }

    return superUser;
  }
}
