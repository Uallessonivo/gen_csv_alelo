import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GenFileDTO } from './dto/gen-file.dto';
import { createObjectCsvWriter } from 'csv-writer';
import { CsvDataInterface } from './interface/data.interface';

@Injectable()
export class GenFileService {
  constructor(private prisma: PrismaService) {}

  async createFile(data: GenFileDTO) {
    const { transport, ticket, days_count } = data;

    const total = (transport + ticket) * days_count;

    const users = await this.prisma.user.findMany();

    const parsedUsers: CsvDataInterface[] = [];

    const csvWriter = createObjectCsvWriter({
      path: 'files/ALELO-GERAL.csv',
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
