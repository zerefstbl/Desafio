# Desafio Refera

### Ajustes e melhorias

> O projeto foi feito de maneira autodidata, onde me esforcei para fazer o máximo de código possivel sem depender de ajudas externas! O Front foi feito em React, onde não era minha especialidade mas ja tive um certo convívio:

O projeto ainda tem muito o que melhorar, e as próximas atualizações seriam voltadas nas seguintes tarefas:

- [ ] Atualizar a página de maneira dinâmica ao criar, editar ou deletar algum Pedido/Categoria
- [ ] Executar uma melhoria no backend, onde faço uso do perform create/update para criação/atualização dos nomes
- [ ] Melhorar a parte visual e responsiva do site
- [ ] Melhorar a arquitetura do código no Frontend, podendo disponibilizar um código de melhor leitura e entendimento
- [ ] Adicionar algumas novas funcionalidades

## 💻 Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:
* Você instalou a versão mais recente de `Python ou Python 3.10.4`
* Você instalou a versão mais recente de `React`
* Você tem uma máquina `Windows, Linux ou macOS`.

## 🚀 Instalando Desafio Refera

Para instalar o Backend do Desafio Refera, siga estas etapas:

Windows, Linux e macOS:
```
* Clone o repositório do git - `git clone https://github.com/zerefstbl/Desafio.git`
* Vá até a pasta do projeto backend - `cd Desafio/backend`
* Crie um novo ambiente virtual - `python -m venv venv`
* Ative o ambiente virtual - `venv/Scripts/activate` no Windows, ou `source venv/bin/activate` no Linux e masOS
* Instale as dependências - `pip install -r requirements.txt`
* Faça as migrações - `py manage.py makemigrations` e depois `py manage.py migrate`
* Rode o servidor localmente - `py manage.py runserver`
```

Para instalar o Frontend do Desafio Refera, siga estas etapas:
```
* Vá até a pasta do projeto frontend - `cd Desafio/frontend`
* Instale as dependências - `yarn`
* Rode o site - `yarn start`
* Certifique-se de criar uma nova categoria, para assim poder adicionar um novo pedido.
```

## 🔒 Como eu faria para implementar um camada de autenticação
> Eu faria uma autenticação baseada em tokens, onde cada usuário teria seu token e o mesmo seria armazenado em um localstorage no Frontend para autenticações futuras.

## 📁 Descreva como você estruturaria o banco de dados para contabilizar dados cadastrais da Imobiliária/Empresa/Contato:
```
* 1 - Iria determinar qual seria o objetivo final da base de dados
* 2 - Organizar e separar todas informações necessárias
* 3 - Iria dividir as informações em tabelas
* 4 - Estabeleceria uma relação entre colunas
* 5 - Aperfeiçoaria a estrutura
```

[⬆ Voltar ao topo](# Desafio Refera)<br>
