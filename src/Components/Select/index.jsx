import { Container } from "./style";

const Select = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label}
        {!!error && <span> - {error}</span>}
      </div>
      <select>
        <option
          value="Primeiro módulo (Introdução ao Frontend)"
          {...register(name)}
        >
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)" {...register(name)}>
          Segundo Módulo
        </option>
        <option
          value="Terceiro módulo (Introdução ao Backend)"
          {...register(name)}
        >
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)" {...register(name)}>
          Quarto Módulo
        </option>
      </select>
    </Container>
  );
};

export default Select;
