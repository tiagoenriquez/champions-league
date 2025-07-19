# CHAMPIONS-LEAGUE

Esta é uma aplicação desenvolvida para entrega em curso da Digital Innovation One. Basicamente gerencia times e jogadores. As tecnologias utilizadas foram:
<li>Node</li>
<li>Typescript</li>
<li>Express</li>
<li>Sequilize</li>
<br>
Para rodar a aplicação, basta digitar no terminal

```
npm run start
```

Abaixo os enpoints da aplicação:

<table>
  <thead>
    <tr>
      <td>Rota</td>
      <td>Verbo</td>
      <td>Ação</td>
    </tr>
  </thead>
  <tbody>
    <!-- Rotas para teams -->
    <tr>
      <td>/teams/</td>
      <td>GET</td>
      <td>Lista todos os times</td>
    </tr>
    <tr>
      <td>/teams/:id</td>
      <td>GET</td>
      <td>Busca um time pelo ID</td>
    </tr>
    <tr>
      <td>/teams/</td>
      <td>POST</td>
      <td>Insere um novo time</td>
    </tr>
    <tr>
      <td>/teams/:id</td>
      <td>PUT</td>
      <td>Atualiza um time pelo ID</td>
    </tr>
    <tr>
      <td>/teams/:id</td>
      <td>DELETE</td>
      <td>Remove um time pelo ID</td>
    </tr>
    <tr>
      <td>/players/</td>
      <td>GET</td>
      <td>Lista todos os jogadores</td>
    </tr>
    <tr>
      <td>/players/:id</td>
      <td>GET</td>
      <td>Busca um jogador pelo ID</td>
    </tr>
    <tr>
      <td>/players/</td>
      <td>POST</td>
      <td>Insere um novo jogador</td>
    </tr>
    <tr>
      <td>/players/:id</td>
      <td>PUT</td>
      <td>Atualiza um jogador pelo ID</td>
    </tr>
    <tr>
      <td>/players/:id</td>
      <td>DELETE</td>
      <td>Remove um jogador pelo ID</td>
    </tr>
  </tbody>
</table>

