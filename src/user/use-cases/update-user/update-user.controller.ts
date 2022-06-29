import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UpdateUserService } from './update-user.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UpdateUserController {
  constructor(private readonly userService: UpdateUserService) {}

  @Post('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.update(id, data);
  }
}
