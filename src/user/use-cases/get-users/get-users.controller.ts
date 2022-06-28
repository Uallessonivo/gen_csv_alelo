import { Controller, Get } from '@nestjs/common';
import { GetUsersService } from './get-users.service';

@Controller('users')
export class GetUsersController {
  constructor(private readonly userService: GetUsersService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
