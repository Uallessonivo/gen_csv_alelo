import { Body, Controller, Param, Post } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UpdateUserService } from './update-user.service';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly userService: UpdateUserService) {}

  @Post('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.update(id, data);
  }
}
