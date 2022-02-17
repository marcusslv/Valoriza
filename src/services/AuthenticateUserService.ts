import { getCustomRepository } from "typeorm";
import { ValidationError } from "../errors/ValidationError";
import { UsersRepositories } from "../repositories/UsersRepositores";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.findOne({
      email,
    });

    if (!user) {
      throw new ValidationError("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new ValidationError("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "0d791e26fe79badfe285a3e6e16b63c3",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
