import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelper } from 'src/helpers/regex.helper';

export class CreateSuperUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegexHelper.passwordRegex, {
    message:
      'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter',
  })
  password: string;
}
