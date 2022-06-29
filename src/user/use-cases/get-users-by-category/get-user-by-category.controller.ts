import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUserByCategoryService } from './get-user-by-category.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class GetUserByCategoryController {
  constructor(private readonly userService: GetUserByCategoryService) {}

  @Get('category/:category')
  async findByCategory(@Param('category') category: string) {
    return this.userService.findByCategory(category);
  }
}
