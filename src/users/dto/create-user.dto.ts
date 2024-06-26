import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Электронная почта'})
    @IsString({message: "Должно быть строкой"})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string

    @ApiProperty({example: 'Пароль', description: 'Электронная почта'})
    @IsString({message: "Должно быть строкой"})
    @Length(4, 16, {message: 'Пароль должен содержать не меньше 4 и не больше 16 символов'})
    readonly password: string
}