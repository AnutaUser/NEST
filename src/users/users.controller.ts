import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from "@nestjs/common";

import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAll();
    }

    @Get('/:id')
    getOneUserById(@Param('id') id: string) {
        return this.usersService.getOneById(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        console.log(newUser)
        return this.usersService.createUser(newUser);
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        console.log('Patch:', id, updateUserDto);
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
