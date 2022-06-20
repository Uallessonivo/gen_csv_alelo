import { IsNotEmpty } from 'class-validator';

export class GenFileDTO {
  @IsNotEmpty()
  ticket: number;

  @IsNotEmpty()
  transport: number;

  @IsNotEmpty()
  days_count: number;
}
