import { IsEmail, IsNotEmpty} from 'class-validator';

export class CreateEmployeeDto {
    @IsNotEmpty()
    first_name:string

    @IsNotEmpty()
    last_name:string

    @IsEmail()
    email_address:string

    @IsNotEmpty()
    department_id:string
}
