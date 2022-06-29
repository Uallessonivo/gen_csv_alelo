import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUserByNameService } from './get-user-by-name.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class GetUserByNameController {
  constructor(private readonly userService: GetUserByNameService) {}

  @Get('name/:name')
  async findOneByName(@Param('name') name: string) {
    return this.userService.findByName(name);
  }
}
