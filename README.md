# 📱 Valoriza — Assistente Financeiro Inteligente

**Valoriza** é um assistente inteligente que combina **inteligência artificial** e **educação financeira** para ajudar usuários a investirem de forma consciente, prevenindo recaídas em hábitos compulsivos, como apostas.

---

## 🚀 Funcionalidades

* Cadastro e login com persistência local (AsyncStorage)
* Tela Home com insights financeiros simulados
* Tela de Ações para registro de atividades pessoais
* Apoio emocional com sugestões de boas práticas
* Tela de Configurações com opções básicas
* Menu de navegação inferior com design acessível

---

## 🧠 Inteligência Artificial

O app se conecta a uma **API desenvolvida com Python e FastAPI**, que coleta:

* Dados de uso do aplicativo
* Transações financeiras (simuladas ou reais via Open Finance)
* Padrões de comportamento do usuário

Esses dados são processados por modelos de **Machine Learning** com:

* `scikit-learn`
* `XGBoost`

Para **detectar sinais de risco comportamental** em tempo real.

---

## 🔍 Transparência com IA Explicável

Utilizamos técnicas de **XAI (Explainable AI)** como:

* `SHAP`
* `LIME`

Isso permite justificar as recomendações e aumentar a confiança do usuário nas sugestões fornecidas.

---

## 🛠 Tecnologias Utilizadas

### Frontend

* React Native com Expo (TypeScript)
* AsyncStorage para persistência local
* Navegação com `@react-navigation`

### Backend (previsto)

* Python 3.11+
* FastAPI
* Banco de dados relacional (PostgreSQL ou SQLite)
* Machine Learning com Scikit-learn e XGBoost

---

## 📦 Como Executar Localmente

1. Instale o Expo:

```bash
npm install -g expo-cli
```

2. Clone o repositório:

```bash
git clone https://github.com/jzampieri/valoriza-app.git
cd valoriza-app
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o projeto:

```bash
npx expo start
```

---

## ✨ Futuras Expansões

* Integração com APIs bancárias reais (Open Finance)
* Notificações push baseadas em eventos de risco
* Painel web para terapeutas e consultores financeiros

---

## 📄 Licença

Este projeto está sob a licença MIT.
