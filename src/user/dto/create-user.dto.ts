import { IsEnum, IsNotEmpty, Length } from 'class-validator';
import { UserCategory } from '../enum/user.enum';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @Length(11, 11)
  cpf: string;

  @Length(15, 15)
  serial: string;

  @IsEnum(UserCategory)
  category: UserCategory;
}
