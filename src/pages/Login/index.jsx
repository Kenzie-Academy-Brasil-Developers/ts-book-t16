import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../components/Input";
import { schema } from "./validator";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <main>
      <section>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(signIn)}>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            type="password"
            id="password"
            label="Senha"
            placeholder="senha"
            error={errors.password?.message}
            {...register("password")}
          />

          <button type="submit">Entrar</button>
        </form>
      </section>
    </main>
  );
};
