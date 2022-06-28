import { Controller, Get, Param } from '@nestjs/common';
import { GetUserByCategoryService } from './get-user-by-category.service';

@Controller('users')
export class GetUserByCategoryController {
  constructor(private readonly userService: GetUserByCategoryService) {}

  @Get('category/:category')
  async findByCategory(@Param('category') category: string) {
    return this.userService.findByCategory(category);
  }
}
