import { Body, Controller, Post } from '@nestjs/common';
import { CreateAdminService } from './create-admin.service';
import { CreateSuperUserDto } from './dto/admin.create.dto';

@Controller('admin')
export class CreateAdminController {
  constructor(private readonly createAdminService: CreateAdminService) {}

  @Post('create')
  async createSuperUser(@Body() data: CreateSuperUserDto) {
    return this.createAdminService.createSuperUser(data);
  }
}
