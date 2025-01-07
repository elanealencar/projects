# WeatherApp - Obtenção de Dados de Temperatura

Este é um projeto desenvolvido em TypeScript que obtém dados de temperatura utilizando a API OpenWeatherMap. O objetivo do projeto é permitir que o usuário informe o nome de uma cidade e receba informações sobre o clima atual dessa cidade.

## Funcionalidades

- Obtenção de dados de temperatura de uma cidade especificada.
- Exibição da temperatura atual, umidade e condições climáticas.
- Uso da API OpenWeatherMap para buscar as informações.

## Pré-requisitos

Antes de rodar o projeto, verifique se você possui os seguintes requisitos:

- [Node.js](https://nodejs.org/) (Recomendado: versão 16 ou superior).
- [TypeScript](https://www.typescriptlang.org/) instalado globalmente (Caso não tenha, instale com `npm install -g typescript`).
- [API Key OpenWeatherMap](https://openweathermap.org/api) (Crie uma conta e gere uma chave de API).

## Como Usar

1. Clone este repositório:
   ```typescript
   git clone https://github.com/seu-usuario/weatherapp.git

2. Navegue até o diretório do projeto:

```typescript
cd weatherapp
```

3. Instale as dependências:

```typescript
npm install

4. Compile o código TypeScript:

```typescript
tsc
```

5. O código compilado será gerado no diretório ./js.

6. Execute o aplicativo:

```typescript
node js/index.js
```

7. Digite o nome de uma cidade quando solicitado para obter os dados de temperatura.

## Estrutura do Projeto

src/: Contém os arquivos de código fonte em TypeScript.
js/: Arquivo compilado para JavaScript (gerado após a execução do tsc).
package.json: Dependências e scripts do projeto.

## Dependências
axios: Biblioteca para fazer requisições HTTP.

## Contribuindo
Faça um fork deste repositório.
Crie uma branch para a sua feature (git checkout -b minha-feature).
Faça as alterações e commit com mensagens claras (git commit -am 'Adicionando nova funcionalidade').
Envie para o repositório remoto (git push origin minha-feature).
Abra um Pull Request.