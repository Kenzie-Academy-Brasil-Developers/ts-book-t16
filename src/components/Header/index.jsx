import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useSearchParams } from "react-router-dom";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const [, setSearchParams] = useSearchParams();

  const handleSearch = (data) => {
    setSearchParams(data)
  };

  return (
    <header>
      <form onSubmit={handleSubmit(handleSearch)}>
        <Input id="search" placeholder="Buscar" {...register("search")} />
      </form>
    </header>
  );
};
