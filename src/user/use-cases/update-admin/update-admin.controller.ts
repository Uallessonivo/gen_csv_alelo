import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateSuperUserDto } from './dto/admin.update.dto';
import { UpdateAdminService } from './update-admin.service';

@Controller('admin')
@UseGuards(AuthGuard('jwt'))
export class UpdateAdminController {
  constructor(private readonly updateAdminService: UpdateAdminService) {}

  @Post('update/:id')
  async updateSuperUser(
    @Param('id') id: string,
    @Body() data: UpdateSuperUserDto,
  ) {
    return this.updateAdminService.updateSuperUser(id, data);
  }
}
