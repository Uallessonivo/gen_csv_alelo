import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUserService } from './get-user.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class GetUserController {
  constructor(private readonly userService: GetUserService) {}

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
