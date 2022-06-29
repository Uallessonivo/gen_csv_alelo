import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateUserService } from './create-user.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class CreateUserController {
  constructor(private readonly userService: CreateUserService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
}
