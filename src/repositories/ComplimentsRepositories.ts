import { Compliment } from "./../entities/Compliment";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };
