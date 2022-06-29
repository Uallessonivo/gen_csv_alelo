import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUsersService } from './get-users.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class GetUsersController {
  constructor(private readonly userService: GetUsersService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
