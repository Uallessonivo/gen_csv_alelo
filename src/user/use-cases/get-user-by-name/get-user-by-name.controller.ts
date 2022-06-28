import { Controller, Get, Param } from '@nestjs/common';
import { GetUserByNameService } from './get-user-by-name.service';

@Controller('users')
export class GetUserByNameController {
  constructor(private readonly userService: GetUserByNameService) {}

  @Get('name/:name')
  async findOneByName(@Param('name') name: string) {
    return this.userService.findByName(name);
  }
}
