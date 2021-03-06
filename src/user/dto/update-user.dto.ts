import { IsEnum, IsOptional, Length } from 'class-validator';
import { UserCategory } from '../enum/user.enum';

export class UpdateUserDto {
  @IsOptional()
  name: string;

  @Length(11, 11)
  @IsOptional()
  cpf: string;

  @Length(15, 15)
  @IsOptional()
  serial: string;

  @IsOptional()
  @IsEnum(UserCategory)
  category: UserCategory;
}
