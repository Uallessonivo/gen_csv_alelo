import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GenFileByCategoryDTO } from './dto/gen-file-by-category.dto';
import { GenFileByCategoryService } from './gen-file-by-category.service';

@Controller('report')
@UseGuards(AuthGuard('jwt'))
export class GenFileByCategoryController {
  constructor(
    private readonly genFileByCategoryService: GenFileByCategoryService,
  ) {}

  @Post('/create-file-category')
  async createFileByCategory(@Body() data: GenFileByCategoryDTO) {
    await this.genFileByCategoryService.createFileByCategory(data);
  }
}
