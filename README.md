# CLI Weather
O CLI Weather é uma ferramenta de linha de comando desenvolvida em Node.js que exibe a previsão do tempo diretamente no terminal, de forma simples, leve e elegante.

## Descrição
O CLI Weather consome a API pública do OpenWeatherMap para obter dados meteorológicos em tempo real.
Com apenas um comando, é possível consultar a temperatura atual, máxima, mínima, umidade, vento e condições climáticas de qualquer cidade do mundo — tudo formatado com cores ANSI para uma experiência agradável no terminal.

## Funcionalidades Principais

- **Consulta Rápida:** Exiba a previsão do tempo de qualquer cidade instantaneamente usando o comando:
```bash
npm run weather "Belo Horizonte"
```

- **Detalhamento Completo:** Retorna temperatura atual, máxima, mínima, umidade, velocidade do vento e condição do céu.

- **Suporte Global:** Suporte para cidades de qualquer país, com descrição em português (via lang=pt_br).

- **Interface Colorida no Terminal:** Uso de chalk para exibir informações com destaque e legibilidade.

- **Fácil Instalação e Uso:** Configuração simples via `npm`, com suporte a variáveis de ambiente usando `.env`.

# Doação

Para fazer uma doação em agradecimento pelo projeto! Acesse: [https://daanrox.com/donate](https://daanrox.com/donate)


## Tecnologias Utilizadas

<div style="display: inline_block"><br> <img align="center" alt="Node.js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"> <img align="center" alt="JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"> <img align="center" alt="Axios" height="30" width="40" src="https://avatars.githubusercontent.com/u/32372333?s=200&v=4"> <img align="center" alt="Chalk" height="30" width="40" src="https://raw.githubusercontent.com/chalk/chalk/main/media/logo.svg"> <img align="center" alt="Dotenv" height="30" width="40" src="https://avatars.githubusercontent.com/u/22716384?s=200&v=4"> </div>




## Executando o Projeto

### Pré-requisitos
Certifique-se de ter o Node.js instalado.

### Instalação das Dependências
No terminal, execute o seguinte comando para instalar as dependências:

```bash
npm install
```
### Configuração da API Key
Crie um arquivo .env na raiz do projeto e adicione sua chave do OpenWeatherMap
```bash
API_KEY=SUA_CHAVE
``` 

### Rodando o Projeto
Para iniciar o backend, utilize o comando: 

```bash
npm run weather "Belo Horizonte"
```
Isso iniciará o servidor Node.js

## Contato
Se tiver dúvidas ou precisar de mais informações, sinta-se à vontade para entrar em contato:
- Email : [contato@daanrox.com](mailto:contato@daanrox.com)
- LinkedIn: [https://www.linkedin.com/in/daanrox/](Daanrox)

--- 

"Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos."
