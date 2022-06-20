import { Body, Controller, Post } from '@nestjs/common';
import { GenFileDTO } from './dto/gen-file.dto';
import { GenFileService } from './gen-file.service';

@Controller('report')
export class GenFileController {
  constructor(private readonly genFileService: GenFileService) {}

  @Post('/create-file')
  async createFile(@Body() data: GenFileDTO) {
    return this.genFileService.createFile(data);
  }
}
