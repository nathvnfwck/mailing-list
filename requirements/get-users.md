# Listar Usuários

> ## Caso de sucesso

1. ❎ Recebe uma requisição do tipo **GET** na rota **/users?format=(json or CSV)**
2. ❎ Retorna **204** se não tiver nenhum usuário cadastrado
3. ❎ Retorna **200** com os dados dos usuários (nome e e-mail) no formato solicitado

> ## Exceções

1. ❎ Retorna erro **404** se a API não existir
2. ❎ Retorna erro **500** se der erro ao tentar listar os usuários

✅ or ❎
