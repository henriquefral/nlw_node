import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService{
    async execute(user_id: string) 
    {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories) ;

        const compliments = await complimentsRepositories.find({
            where: {
                userSender: user_id,
            },
            relations: ["user_sender", "user_receiver", "tag_id"] // Caution
        });

        return compliments;
    }

}

export {ListUserSendComplimentsService}