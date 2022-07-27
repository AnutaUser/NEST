import {Injectable} from '@nestjs/common';

import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Injectable()
export class UsersService {

    private users = [];

    getAll() {
        return this.users
    }

    getOneById(id: string) {
        // Number(id);
        return this.users.find((user) => user.id == id);
    }

    createUser(newUser: CreateUserDto) {
        this.users.push({
            ...newUser,
            id: new Date().valueOf()
        });
        return newUser;
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        const userForUpdate = this.users.find((user) => user.id == id);
        console.log('user:', userForUpdate);
        this.users[userForUpdate] = {...this.users[userForUpdate], ...updateUserDto};
        console.log(updateUserDto)
        return updateUserDto;

    }

    remove(id: string) {
        const index = this.users.findIndex((user) => user.id === id);
        console.log(index);
        this.users.splice(index, 1);
        return;
    }
}
