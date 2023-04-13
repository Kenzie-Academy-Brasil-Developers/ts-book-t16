import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../components/Input";
import { schema } from "./validator";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Main } from "./styles";
import { Button } from "../../styles/Button";
import { Loading } from "../../styles/Loading";

export const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(isSubmitting);

  return (
    <Main>
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

          <Button type="submit" disabled={isSubmitting}>
          <Loading /> 
            {isSubmitting ? <Loading /> : "Entrar"}
          </Button>
        </form>
      </section>
    </Main>
  );
};
