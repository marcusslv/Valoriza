import { getCustomRepository } from "typeorm";
import { ValidationError } from "../errors/ValidationError";
import { UserRepositories } from "../repositories/UsersRepositores";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new ValidationError("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new ValidationError("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
