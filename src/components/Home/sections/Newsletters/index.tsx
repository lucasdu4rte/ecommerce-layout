import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import styles from "./styles.module.scss";

type FormData = {
  name: string;
  email: string;
};

const Newsletters = () => {
  const [isServerError, setServerError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: FormData) => {
    try {
      setServerError(false);
      await axios.post(
        "https://corebiz-test.herokuapp.com/api/v1/newsletter",
        data
      );
    } catch (err) {
      alert("Houve um problema, tente novamente por favor");
      setServerError(true);
    }
  };

  return (
    <section>
      <div className={styles.container}>
        {!isSubmitting && isSubmitSuccessful && !isServerError ? (
          <div className={styles.successMessage}>
            <strong>Seu e-mail foi cadastrado com sucesso!</strong>
            <p>
              A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>
            <button type="button" onClick={() => reset()}>
              Cadastrar novo e-mail
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Participe de nossas news com promoções e novidades!</h4>
            <div className={styles.formInline}>
              <label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  {...register("name", { required: true, maxLength: 30 })}
                  data-invalid={!!errors.name}
                />
                {errors.name && <span>Preencha com seu nome completo</span>}
              </label>
              <label>
                <input
                  placeholder="Digite seu email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Preencha com um e-mail válido",
                    },
                  })}
                  type="email"
                  data-invalid={!!errors.email}
                />
                {errors.email && <span>Preencha com um e-mail válido</span>}
              </label>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Eu quero!"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletters;
