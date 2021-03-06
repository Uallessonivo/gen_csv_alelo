import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from 'stream';
import { UsersInterface } from 'src/user/interface/users.interface';
import { CreateUsersFromFileService } from './create-users-fromfile.service';
import { AuthGuard } from '@nestjs/passport';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const readline = require('readline');

@Controller('report')
@UseGuards(AuthGuard('jwt'))
export class CreateUsersFromFileController {
  constructor(
    private readonly createUsersFromFileService: CreateUsersFromFileService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const { buffer } = file;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const usersLine = readline.createInterface({
      input: readableFile,
    });

    const users: UsersInterface[] = [];

    for await (const line of usersLine) {
      const userLineSplit = line.split(';');

      users.push({
        cpf: userLineSplit[0],
        category: userLineSplit[1],
        serial: userLineSplit[2],
        name: userLineSplit[4],
      });
    }

    for await (const { cpf, category, serial, name } of users) {
      await this.createUsersFromFileService.createUser(
        cpf,
        category,
        serial,
        name,
      );
    }
  }
}
