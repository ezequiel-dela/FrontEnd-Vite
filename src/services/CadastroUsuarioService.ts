import { ICadastroUsuario } from "../interfaces/ICadastroUsuario";
import { api } from "../providers";

//const CadastrarUsuario = (data: ICadastroUsuario) => api.post("api/v1/usuario", data);

interface ApiResponse<T> {
    data: T | null;         // Conteúdo da resposta
    status: number;         // Código de status HTTP
    statusText: string;     // Texto de status HTTP
    headers: any;           // Cabeçalhos da resposta
    errorMessage?: string;  // Mensagem de erro personalizada (opcional)
  }

// Exemplo de uso da interface
const CadastrarUsuario = (payload: ICadastroUsuario) => api.post<ApiResponse<ICadastroUsuario>>("api/v1/usuario", payload)
  .then((response) => {
    const apiResponse: ApiResponse<ICadastroUsuario> = {
      data: response.data.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
    return apiResponse;
  })
  .catch((error) => {
    const apiResponse: ApiResponse<null> = {
      data: null,
      status: error.response?.status || 500,
      statusText: error.response?.statusText || 'Internal Server Error',
      headers: error.response?.headers || {},
      errorMessage: error.message,
    };
    return apiResponse;
  });

export const CadastroUsuarioService = {
    CadastrarUsuario
}