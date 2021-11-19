import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('v1')
export class UserV1Controller {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<any> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    console.log(await this.userService.getUsers());
    console.log(await this.userService.getUserById(id));
    return this.userService.getUserById(id);
  }
}
