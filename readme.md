## Regra Proteção de Rotas

1. Provider por fora de todas as rotas
2. Criar função que faz o login dentro do Provider
    1. Guardar o token dentro do localStorage
    2. Definir o meu token como global em todas as requisições (linha 47)
    3. Definir o usuário dentro estado
    4. Redirecionar o usuário
3. Preciso pegar a função criada e passar no value do provider
4. Criar tela de login e chamar função de login do contexto
5. Criar proteção de rotas
    1. Criar componente ProtectedRoutes
        1. Se estiver com loading mostrar carregando para o usuário
        2. Se o loading terminou e não existe o usuário, redirecionar para o login
        3. Se o loading terminou e existe o usuário, redirecionar para rota que ele deseja acessar.
    2. Colocar componente ProtectedRoutes por fora das rotas que precisam de proteção


## Regra F5

1. loading precisa estar como true
2. Criar um useEffect apenas de montagem
    1. Preciso buscar o token
    2. Se o token não existir, matar a função através do return
    3. Buscar o id do usuario dentro do token, usando decode
    4. Definir o meu token como global em todas as requisições (linha 27)
    5. Buscar o usuario de acordo com o id
    6. Se o usuario for buscado com sucesso eu vou colocar ele dentro do estado
    7. Se o usuario for buscado com erro, não faz nada e deixa o ProtectedRoutes fazer o redirecionamento
    8. Independetemente se der certo ou errado eu defino meu loading como false
