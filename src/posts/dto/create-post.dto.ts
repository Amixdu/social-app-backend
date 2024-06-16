import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  caption: string;

  @IsNumber()
  @IsNotEmpty()
  createdBy: number;

  @IsArray()
  hashtags: string[];
}
