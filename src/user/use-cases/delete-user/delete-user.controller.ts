import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteUserService } from './delete-user.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class DeleteUserController {
  constructor(private readonly userService: DeleteUserService) {}

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
