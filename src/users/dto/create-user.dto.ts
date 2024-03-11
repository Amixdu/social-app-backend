import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
export default class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  test: boolean;
}
