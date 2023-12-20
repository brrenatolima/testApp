Instação
Baixe o aplicativo que está anexado na release do projeto.

Execução
Caso queira executar via Visual Studio Code, execute os comandos:
  - npm install - instala as dependências do projeto
  - npx expo run:(android ou ios)

Ao iniciar, o sistema fará chamada no banco local do aplicativo em busca do usuário;

Caso não encontre, a tela de login/registro será exibida (as duas telas estarão disponíveis com navegação por abas).

A URL utilizada é https://musicapi-w7kn.onrender.com
Para fazer o registro, a chamada do método utilizado é https://musicapi-w7kn.onrender.com/user/register
Para fazer login, a chamada do método utilizado é https://musicapi-w7kn.onrender.com/user/login - nesta chamada, um token será devolvido caso a autenticação seja bem sucedida.

Os métodos chamados na HOME, primeira página autenticada são https://musicapi-w7kn.onrender.com/albums e https://musicapi-w7kn.onrender.com/stories;

Em cada álbum retornado, há a opção de favoritar - clicando no ícone de coração e visualizar mais detalhes do álbum, clicando no mesmo;

Clicando no "Storie", é exibida mais informações do artista selecionado.

Na tela home também é dada a opção de fazer logout, apagando do banco local as informações do usuário.
