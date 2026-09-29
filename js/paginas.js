export function paginaInicio() {
    return `
        <section>
            <h2>Quem somos</h2>
            <p>
                A ONG Esperança atua no apoio a famílias em situação de vulnerabilidade,
                promovendo ações sociais e projetos para melhorar a qualidade de vida da comunidade.
            </p>
        </section>

        <section class="contato">
            <h2>Contato</h2>

            <div class="contato-cards">
                <article class="contato-card">
                    <h3>E-mail</h3>
                    <p>contato@ongesperanca.com</p>
                </article>

                <article class="contato-card">
                    <h3>Telefone</h3>
                    <p>(21) 99999-9999</p>
                </article>

                <article class="contato-card">
                    <h3>Endereço</h3>
                    <p>Rua da Esperança, 100 - Barra da Tijuca/RJ</p>
                </article>
            </div>
        </section>
    `;
}

export function paginaProjetos() {
    return `
        <section>
            <h2>Projetos sociais</h2>
            <p>
                Conheça os projetos da ONG Esperança e veja como você pode contribuir
                para transformar a vida de pessoas da nossa comunidade.
            </p>
        </section>

        <section>
            <h2>Projeto Alimentar</h2>
            <p>
                O Projeto Alimentar arrecada alimentos e monta cestas básicas
                para famílias em situação de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Projeto Voluntariado</h2>
            <p>
                O programa de voluntariado permite que pessoas contribuam com seu
                tempo e suas habilidades nas ações da ONG. Também é possível apoiar
                as campanhas de doação para ajudar na manutenção dos projetos sociais.
            </p>
        </section>
    `;
}

export function paginaCadastro() {
    return `
        <section>
            <h2>Cadastre-se para participar</h2>

            <form id="form-cadastro">

                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome Completo:</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        required
                    >

                    <label for="cpf">CPF:</label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        required
                    >

                    <span class="mensagem-erro" id="erro-cpf">
                        Por favor, insira um CPF válido.
                    </span>

                    <label for="data">Data de Nascimento:</label>

                    <input
                        type="date"
                        id="data"
                        name="data"
                        required
                    >

                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <label for="email">E-mail:</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="exemplo@exemplo.com"
                        required
                    >

                    <label for="telefone">Telefone:</label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(99) 99999-9999"
                        required
                    >

                    <span class="mensagem-erro" id="erro-telefone">
                        Por favor, insira um telefone válido.
                    </span>

                    <label for="cep">CEP:</label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        required
                    >

                    <span class="mensagem-erro" id="erro-cep">
                        Por favor, insira um CEP válido.
                    </span>

                </fieldset>

                <button type="submit">Enviar cadastro</button>

                <div class="mensagem-sucesso" id="mensagem-sucesso">
                    Cadastro realizado com sucesso!
                </div>

            </form>
        </section>
    `;
}