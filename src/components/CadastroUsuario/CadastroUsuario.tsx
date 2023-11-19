import { useForm, Controller } from 'react-hook-form';
import * as s from './styles';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CadastroUsuarioService } from '../../services/CadastroUsuarioService';
import TextField from '@mui/material/TextField/TextField';

const validationSchema = z
  .object({
    nome: z
      .string({ required_error: "O nome é obrigatório" })
      .nonempty("O nome é obrigatório"),
    sobrenome: z
      .string({ required_error: "O sobrenome é obrigatório" })
      .nonempty("O sobrenome é obrigatório"),
    email: z
      .string({ required_error: "O e-mail é obrigatório" })
      .nonempty("O e-mail é obrigatório")
      .email("Digite um e-mail válido"),
    senha: z
      .string({ required_error: "A senha é obrigatória" })
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmaSenha: z
      .string()
      .nonempty("Digite a confirmação de senha"),
  })

  .refine((formData) => formData.senha === formData.confirmaSenha, {
    path: ["confirmaSenha"],
    message: "A confirmação de senha não corresponde",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

const CadastroUsuario = () => {
  const { 
    handleSubmit, 
    control, 
    formState: { errors }, 
    register
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  async function onSubmit (formData: ValidationSchema) {
    try {
      const response = await CadastroUsuarioService.CadastrarUsuario(formData);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <s.Page>
    <s.Container>
      <s.TituloForm>Cadastro</s.TituloForm>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <s.FormField>
          <Controller
            {...register("nome")}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField 
                                      id="nome" 
                                      label="Nome" 
                                      variant="standard"
                                      {...field}
                                    />}
          />
          {errors.nome && <s.Avisos>{errors.nome.message}</s.Avisos>}
        </s.FormField>

        <s.FormField>
          <Controller
            {...register("sobrenome")}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField 
                                      id="sobrenome" 
                                      label="Sobrenome" 
                                      variant="standard"
                                      {...field}
                                    />}
          />
          {errors.sobrenome && <s.Avisos>{errors.sobrenome.message}</s.Avisos>}
        </s.FormField>

        <s.FormField>
          <Controller
            {...register("email")}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField 
                                      id="email" 
                                      label="Email" 
                                      variant="standard"
                                      type="email"
                                      {...field}
                                    />}
          />
          {errors.email && <s.Avisos>{errors.email.message}</s.Avisos>}
        </s.FormField>

        <s.FormField>
          <Controller
            {...register("senha")}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField 
                                      id="senha" 
                                      label="Senha" 
                                      variant="standard"
                                      type="password"
                                      {...field}
                                    />}
          />
          {errors.senha && <s.Avisos>{errors.senha.message}</s.Avisos>}
        </s.FormField>

        <s.FormField>
          <Controller
            name="confirmaSenha"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField 
                                      id="confirma-senha" 
                                      label="Confirmação de senha" 
                                      variant="standard"
                                      type="password"
                                      {...field}
                                    />}
          />
          {errors.confirmaSenha && <s.Avisos>{errors.confirmaSenha.message}</s.Avisos>}
        </s.FormField>

        <s.SubmitButton type="submit">Enviar</s.SubmitButton>
      </s.Form>
    </s.Container>
    </s.Page>
  );
}

export default CadastroUsuario;