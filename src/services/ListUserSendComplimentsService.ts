import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { instanceToPlain } from 'class-transformer';

class ListUserSendComplimentsService{
    async execute(user_id: string) 
    {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories) ;

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id,
            },
            relations: ["tag", "userSender", "userReceiver"] // Caution
        });

        return instanceToPlain(compliments);
    }

}

export {ListUserSendComplimentsService}