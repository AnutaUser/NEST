import {Injectable} from '@nestjs/common';

import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';

@Injectable()
export class PostsService {

    private posts = [];

    findAll() {
        return this.posts;
    }

    findOne(id: string) {
        return this.posts.find((post) => post.id == id);
    }

    create(createPostDto: CreatePostDto) {
        this.posts.push({
            ...createPostDto,
            id: new Date().getSeconds()
        });
        return createPostDto;
    }

    update(id: string, updatePostDto: UpdatePostDto) {
      const post = this.posts.find((post) => post.id == id);
      console.log(post);
      this.posts[post] = {...this.posts[post], ...updatePostDto};
      console.log(updatePostDto)
        return updatePostDto;
    }

    remove(id: string) {
      const index = this.posts.findIndex((post) => post.id == id);
      this.posts.splice(index, 1);
        return `Post ${id} was successfully deleted`;
    }
}
