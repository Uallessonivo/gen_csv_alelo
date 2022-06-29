import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSuperUserDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
