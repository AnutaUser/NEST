import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';

import {PostsService} from './posts.service';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {

    }

    @Get()
    findAllPosts() {
        return this.postsService.findAll();
    }

    @Get('/:id')
    getOnePostById(@Param('id') id: string) {
        return this.postsService.findOne(id);
    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto);
    }

    @Patch('/:id')
    updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(id, updatePostDto);
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.postsService.remove(id);
    }
}
