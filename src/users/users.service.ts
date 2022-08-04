import {Injectable} from '@nestjs/common';

import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from "../core/prisma.service";
import {User} from "./entities/user.entity";
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) {
    }

    async getAll(): Promise <User[]> {
        return this.prismaService.user.findMany();
    }

    async getOneById(userId: string): Promise<User> {
        return this.prismaService.user.findFirst({
            where: {id: Number(userId)},
            // select: {email: true, username: true},
            include: {posts: true}
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data,
        });
    }

    // async updateUser(params: {
    //     id: Prisma.UserWhereUniqueInput;
    //     data: Prisma.UserUpdateInput;
    // }): Promise<User> {
    //     const { id, data } = params;
    //     return this.prismaService.user.update({
    //         data,
    //         Number(id),
    //     });
    // }

    async updateUser(id: string, data: UpdateUserDto): Promise<User> {
        return this.prismaService.user.update({
            where: {id: Number(id)},
            data: {
                username: data.username,
                age: data.age,
                status: data.status
            }
        })
    }

    async deleteUser(id: string): Promise<User> {
        return this.prismaService.user.delete({
            where: {id: Number(id)}
        });
    }
}
