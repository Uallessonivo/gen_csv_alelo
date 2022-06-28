import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';

@Controller('users')
export class DeleteUserController {
  constructor(private readonly userService: DeleteUserService) {}

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
