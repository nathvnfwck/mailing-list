# Salvar usuário

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/users**
2. ✅ Valida se a requisição contém no BODY os parâmetros **name** e **email**
3. ✅ Retorna **201** se conseguir criar o usuário

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **500** se der erro ao tentar salvar o usuário no banco
