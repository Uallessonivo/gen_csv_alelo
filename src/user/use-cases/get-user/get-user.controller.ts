import { Controller, Get, Param } from '@nestjs/common';
import { GetUserService } from './get-user.service';

@Controller('users')
export class GetUserController {
  constructor(private readonly userService: GetUserService) {}

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
