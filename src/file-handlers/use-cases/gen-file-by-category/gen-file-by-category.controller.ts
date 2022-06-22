import { Body, Controller, Post } from '@nestjs/common';
import { GenFileByCategoryDTO } from './dto/gen-file-by-category.dto';
import { GenFileByCategoryService } from './gen-file-by-category.service';

@Controller('report')
export class GenFileByCategoryController {
  constructor(
    private readonly genFileByCategoryService: GenFileByCategoryService,
  ) {}

  @Post('/create-file-category')
  async createFileByCategory(@Body() data: GenFileByCategoryDTO) {
    await this.genFileByCategoryService.createFileByCategory(data);
  }
}
