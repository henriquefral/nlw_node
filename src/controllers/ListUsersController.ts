import { Response } from "express";
import { ListUsersService } from "../services/ListUsersService"


class ListUsersController {
    async handle(response: Response) {
        const listUsersService = new ListUsersService;

        const users = listUsersService.execute();

        return response.json(users);
    }

}

export { ListUsersController }