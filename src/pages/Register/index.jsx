import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../components/Input";
import { schema } from "./validator";
import { BookContext } from "../../providers/BookProvider";

export const Register = () => {
  const {handleRegister} = useContext(BookContext);
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
        <h1>Register</h1>

        <form onSubmit={handleSubmit(handleRegister)}>
          <Input
            type="text"
            id="name"
            label="Nome"
            placeholder="nome"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            type="text"
            id="author"
            label="Autor"
            placeholder="autor"
            error={errors.author?.message}
            {...register("author")}
          />

          <Input
            type="text"
            id="cover"
            label="Capa"
            placeholder="ex: https://capa.com"
            error={errors.cover?.message}
            {...register("cover")}
          />

          <Input
            type="text"
            id="published"
            label="Publicado em"
            placeholder="ex: janeiro de 2023"
            error={errors.published?.message}
            {...register("published")}
          />

          <Input
            type="number"
            id="numberPages"
            label="Nº de páginas"
            placeholder="Nº de páginas"
            error={errors.numberPages?.message}
            {...register("numberPages")}
          />

          <Input
            type="text"
            id="publishingCompany"
            label="Editora"
            placeholder="editora"
            error={errors.publishingCompany?.message}
            {...register("publishingCompany")}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  );
};
