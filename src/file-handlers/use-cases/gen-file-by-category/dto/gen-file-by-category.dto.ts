import { IsEnum, IsNotEmpty } from 'class-validator';
import { UserCategory } from 'src/user/enum/user.enum';

export class GenFileByCategoryDTO {
  @IsNotEmpty()
  ticket: number;

  @IsNotEmpty()
  transport: number;

  @IsNotEmpty()
  days_count: number;

  @IsEnum(UserCategory)
  category: UserCategory;
}
