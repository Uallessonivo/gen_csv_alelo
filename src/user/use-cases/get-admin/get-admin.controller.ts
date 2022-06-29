import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetAdminService } from './get-admin.service';

@Controller('admin')
@UseGuards(AuthGuard('jwt'))
export class GetAdminController {
  constructor(private readonly getAdminService: GetAdminService) {}

  @Get(':email')
  async getAdmin(@Param('email') email: string) {
    return await this.getAdminService.getAdmin(email);
  }
}
