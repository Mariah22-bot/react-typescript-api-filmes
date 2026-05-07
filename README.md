# 🎬 Studio Ghibli - Cine Explorer

Este projeto é uma aplicação web desenvolvida com **React**, **TypeScript** e **Vite** que consome a API oficial do Studio Ghibli. O objetivo é listar os 10 primeiros filmes do Studio Ghibli em ordem alfabética e fornecer detalhes sobre cada obra.

---

## 🚀 Sobre o Projeto
A aplicação foi construída como um desafio técnico para consolidar conceitos de:
* **Consumo de APIs REST** com tratamento de estados (loading/error).
* **Gerenciamento de Rotas** com `react-router-dom`.
* **Tipagem Estrita** para garantir a integridade dos dados da API.
* **UI Dinâmica** utilizando Tailwind CSS (v4) com efeitos de Glassmorphism.

---

## 🛠️ Tecnologias Utilizadas
| Tecnologia | Descrição |
| :--- | :--- |
| **React 18** | Biblioteca para construção da interface. |
| **TypeScript** | Superset JavaScript para tipagem estática. |
| **Vite** | Build tool ultra-rápida para o frontend. |
| **Tailwind CSS** | Estilização moderna e utilitária. |
| **React Router** | Navegação SPA (Single Page Application). |

---

## 🎯 Funcionalidades
- [x] **Listagem Inteligente:** Exibe os 10 filmes mais icônicos em ordem alfabética.
- [x] **Página de Detalhes:** Informações completas como Diretor, Produtor, Sinopse e Score.
- [x] **UI Responsiva:** Layout adaptável para dispositivos móveis e desktop.
- [x] **Feedback Visual:** Estados de carregamento e animações de entrada (`Fade-in`).
- [x] **Design Temático:** Fundo estilizado com grid radial e cards em efeito vidro.

---

## 📋 Requisitos do Desafio
Para a execução deste projeto, foram seguidos os seguintes critérios:
1.  **Endpoint:** `https://ghibliapi.vercel.app/films`
2.  **Ordenação:** Método `.sort()` aplicado para garantir a ordem alfabética de A-Z.
3.  **Filtro:** Limitação de exibição para os 10 primeiros resultados.
4.  **Tipagem:** Interface `Film` definida para cobrir todos os campos da API.

---

## 📸 Estrutura de Pastas
```text
src/
 ├── assets/          # Imagens e recursos estáticos
 ├── components/      # Componentes reutilizáveis
 ├── hooks/           # Hook customizado useEffect para fetch
 ├── pages/           # FilmList e FilmDetails
 ├── App.tsx          # Configuração de Rotas
 └── index.css        # Tailwind e estilos globais
```

---

## ⚙️ Como rodar o projeto
Se você quiser clonar e testar este projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 💡 Aprendizados
> "Este projeto reforçou a importância da tipagem de dados externos. Ao definir exatamente o que a API do Studio Ghibli retorna, o desenvolvimento da página de detalhes tornou-se muito mais seguro, evitando erros de propriedades nulas."

---
*Desenvolvido com ❤️ por MariÁH, e ajuda de IA* 🌟