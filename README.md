🌸 Sistema de Agendamento - Salão de Beleza
Este é um sistema web completo desenvolvido em Django para gestão de agendamentos em estabelecimentos de estética. O projeto foca na facilidade de uso para o administrador e em uma interface visualmente atraente e personalizada.

🚀 Funcionalidades
Cadastro de Agendamentos: Formulário intuitivo para registrar novos clientes e serviços.

Agenda Dinâmica: Visualização em tempo real de todos os atendimentos marcados.

Interface Responsiva: Design adaptável para dispositivos móveis e desktops utilizando Bootstrap 5.

Estilização Personalizada: CSS exclusivo para garantir a identidade visual do salão.

🛠️ Tecnologias Utilizadas
Backend: Python + Django Framework.

Frontend: HTML5, CSS3, JavaScript e Bootstrap 5.

Banco de Dados: SQLite (nativo do Django para desenvolvimento).

Arquitetura: MVT (Model-View-Template).

📁 Estrutura do Projeto
A organização segue as melhores práticas de arquitetura do Django:

/agendamentos: Aplicativo principal contendo a lógica de negócio e modelos.

/templates: Estrutura de namespacing para garantir que o Django localize os arquivos HTML corretamente.

/static: Centralização de arquivos CSS e ativos visuais do projeto.

⚙️ Como rodar o projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/salao-beleza.git
Entre na pasta do projeto:

Bash
cd salao_beleza
Crie e ative um ambiente virtual:

Bash
python -m venv venv
# Windows:
.\venv\Scripts\activate
Execute as migrações do banco de dados:

Bash
python manage.py migrate
Inicie o servidor:

Bash
python manage.py runserver
Acesse em seu navegador: http://127.0.0.1:8000/

🧠 Aprendizados Adquiridos
Durante o desenvolvimento deste projeto, foram superados desafios técnicos fundamentais para um Engenheiro de Software:

Gestão de Static Files: Configuração e integração de diretórios globais de CSS no Django.

Resolução de Conflitos de Template: Organização de hierarquia de pastas para evitar erros de TemplateDoesNotExist.

Depuração de Erros de Caminho: Uso avançado do terminal e comandos de navegação de diretórios para execução de scripts.


---

## 🍔 Cardápio Digital com React + Tailwind
Também foi adicionada uma interface moderna de cardápio digital em React com Tailwind CSS na pasta `cardapio-digital/`.

### Como executar
```bash
cd cardapio-digital
npm install
npm run dev
```
Acesse em: `http://localhost:5173`

### Recursos de UX implementados
- Navegação rápida por categorias com rolagem suave.
- Destaques de entrega, pagamento e fidelidade.
- Layout responsivo com identidade visual inspirada na paleta do iFood.
- CTA claro de pedido para melhorar conversão.
