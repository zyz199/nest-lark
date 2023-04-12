import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
export declare class UserController {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    getTestName(): any;
    findError(): string;
    findBusinessError(): string;
    findAll2(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
