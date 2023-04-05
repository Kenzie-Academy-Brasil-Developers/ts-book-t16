import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {api} from '../../services/api';
import { Input } from "../../components/Input";
import { Input2 } from "../../components/Input/index2";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const [isTypePassword, setIsTypePassword] = useState(true);
  const navigate = useNavigate();
  console.log("Renderizando");

  const handleRegister = async (data) => {
    try {
      await api.post('/books', data);

      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <main>
      <section>
        <h1>Register</h1>

        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset>
            <legend>Cadastro</legend>
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="ex: teste@mail.com"
              {...register("email")}
            />
            <Input2
              type={isTypePassword ? "password" : "text"}
              id="password"
              label="Senha"
              placeholder="senha"
              register={register("password")}
            >
              <button onClick={() => setIsTypePassword(!isTypePassword)}>
                Olhinho
              </button>
            </Input2>

            <input type="text" {...register("name")} />
          </fieldset>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  );
};
