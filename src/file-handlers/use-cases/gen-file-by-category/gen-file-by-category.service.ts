import { Injectable } from '@nestjs/common';
import { createObjectCsvWriter } from 'csv-writer';
import { PrismaService } from 'src/database/prisma.service';
import { CsvDataInterface } from '../gen-file/interface/data.interface';
import { GenFileByCategoryDTO } from './dto/gen-file-by-category.dto';

@Injectable()
export class GenFileByCategoryService {
  constructor(private prisma: PrismaService) {}

  async createFileByCategory(data: GenFileByCategoryDTO) {
    const { transport, ticket, days_count } = data;

    const total = (transport + ticket) * days_count;

    const users = await this.prisma.user.findMany({
      where: {
        category: data.category,
      },
    });

    const parsedUsers: CsvDataInterface[] = [];

    const csvWriter = createObjectCsvWriter({
      path: `files/ALELO-GERAL-${data.category}.csv`,
      fieldDelimiter: ';',
      header: [
        { id: 'serial', title: 'SERIAL' },
        { id: 'cpf', title: 'CPF' },
        { id: 'total', title: 'TOTAL' },
        { id: 'name', title: 'NAME' },
      ],
    });

    for await (const user of users) {
      parsedUsers.push({
        serial: user.serial,
        cpf: user.cpf,
        total: total.toFixed(2),
        name: user.name,
      });
    }

    await csvWriter.writeRecords(parsedUsers);
  }
}
