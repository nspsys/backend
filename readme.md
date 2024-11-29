## Visão Geral

Este projeto servirá para disponibilizar uma rota de API que será usada como um webhook na integração com o Whatsapp através da plataforma Twilio.
A API foi construída usando o expressJs e JWT para garantir um acesso seguro aos clientes da API.

Para conseguir rodar esta aplicação localmente para fins de desenvolvimento, será necessário:

Ter uma conta Google e criar um projeto _nspsys_ no firebase

[firebase](https://firebase.google.com/?hl=pt-br)

No firebase, criar um banco no firestore denominado _notificacoes_

Instalar o firebase sdk na sua máquina

`npm install firebase`

conectar o terminal a sua conta Google

`firebase login --reauth`

PASSOS

Por uma questão de organização, crie um diretório projetos:

`mkdir -p ~/projetos`

dentro dessa pasta, crie uma outra pasta exclusiva para o sistema nspsys:

`mkdir -p ~/projetos/nspsys`

entre no diretório:

`cd ~/projetos/nspsys`

faça o clone do projeto:

`git clone git@github.com:nspsys/backend.git`

entre no diretório backend:

`cd ~/projetos/nspsys/backend`

crie o arquivo .env utilizando como base o .env.example:

`mv ~/projetos/nspsys/frontend/.env.example ~/projetos/nspsys/frontend/.env`

E preencha o arquivo .env com suas credenciais de acesso ao projeto nspsys no [firebase](https://firebase.google.com/docs/firestore/query-data/get-data?hl=pt-br):

```env
VUE_APP_API_KEY="INFORMAR_SUA_API_KEY"
VUE_APP_KEY_AUTH_DOMAIN="INFORMAR_SEU_KEY_AUTH_DOMAIN"
VUE_APP_PROJECT_ID="INFORMAR_SEU_PROJECT_ID"
VUE_APP_STORAGE_BUCKET="INFORMAR_SEU_STORAGE_BUCKET"
VUE_APP_MESSAGING_SENDER_ID="INFORMAR_SEU_MESSAGING_SENDER_ID"
VUE_APP_ID="INFORMAR_SEU_APP_ID" JWT_PRIVATE_KEY="INFORMAR_SUA_PRIVATE_KEY"
```

instalar as dependências:

`npm i`

rodar a aplicação:

`npm run serve`

Para que algum serviço consiga acessar sua API rodando localmente, ou seja, para disponibilizar sua API local para a internet, sugerimos o uso do [ngrok](https://ngrok.com/docs/what-is-ngrok/)
Desta forma, você conseguirá emular localmente os serviços do Google Firebase, e ao mesmo tempo, usá-lo para testar a integração com a Twilio.

## Twilio

Crie sua conta na [Twilio](https://www.twilio.com/login?g=%2Fconsole-zen%2Fhttps%3A%2F%2Fconsole.twilio.com%2F&t=2d94b9e4c79e07a34a2fac4a2be87b4517b42f35aa88738462dfee82b084af25)

Usando o studio/flows
Crie os fluxos

- nspsys
- paciente
- profissional
- notificante

A plataforma permite que você crie os fluxos através dos arquivos .json que estão versionados aqui no projeto na pasta _twilio_
Além disso, será necessário criar uma _twilio.function_ também pela plataforma, essa função deverá se chamar `nsp` e o código dela também está aqui no mesmo diretório.
Para a criação dos fluxos conversacionais aqui representados, houve a necessidade de criar alguns componentes para o Whatsapp, o que pode ser feito através desse [link](https://console.twilio.com/us1/develop/sms/content-template-builder)

- nsp_quickreply_imagem
- nsp_quickreply_paciente
- nsp_quickreply_profissional
- nsp_quickreply_anonizado
- nsp_menu_principal

![image](https://github.com/user-attachments/assets/a51517f2-003b-4b56-860b-e1108ae94aa5)

![image](https://github.com/user-attachments/assets/62e2b3b3-d717-4051-8cad-5e779594a042)

![image](https://github.com/user-attachments/assets/7bf3bb52-5be6-4d0e-90ba-e6e03f9dcb88)

![image](https://github.com/user-attachments/assets/6e15d5f0-91a0-4d01-8dc0-68367242eecb)

![image](https://github.com/user-attachments/assets/7879b139-09cb-467e-a4c5-4550305a9ffe)

![image](https://github.com/user-attachments/assets/a2e11834-e337-4c1b-a051-7b1771d4dba8)


Infelizmente não há como exportar e versionar a criação desses componentes através da plataforma.
Cada componente criado adquire um _Content template SID_ que deverá ser informado (substituído) nos fluxos que estão versionados aqui no projeto.
O Twilio disponibiliza um saldo padrão para novas contas criadas, e um Sandbox que pode ser usado para desenvolvimento de novas soluções antes que haja um número oficial de whatsapp para ser usado.
