import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GenFileDTO } from './dto/gen-file.dto';
import { GenFileService } from './gen-file.service';

@Controller('report')
@UseGuards(AuthGuard('jwt'))
export class GenFileController {
  constructor(private readonly genFileService: GenFileService) {}

  @Post('/create-file')
  async createFile(@Body() data: GenFileDTO) {
    return this.genFileService.createFile(data);
  }
}
