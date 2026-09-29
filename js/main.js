import {
    paginaInicio,
    paginaProjetos,
    paginaCadastro
} from "./paginas.js";


document.addEventListener("DOMContentLoaded", function () {

    console.log("Aplicação carregada!");

    const links = document.querySelectorAll("nav a");
    const conteudo = document.querySelector("#conteudo");

    const menuToggle = document.querySelector("#menu-toggle");
    const menuIcon = document.querySelector("#menu-icon");

    menuToggle.addEventListener("change", function () {
        menuIcon.setAttribute("aria-expanded", menuToggle.checked);
    });


    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const pagina = link.getAttribute("href");


            if (pagina === "#inicio") {

                conteudo.innerHTML = paginaInicio();

            }


            if (pagina === "#projetos") {

                conteudo.innerHTML = paginaProjetos();

            }


            if (pagina === "#cadastro") {

                conteudo.innerHTML = paginaCadastro();


                const cadastroSalvo = JSON.parse(
                    localStorage.getItem("cadastro")
                );


                if (cadastroSalvo) {

                    document.querySelector("#nome").value =
                        cadastroSalvo.nome;

                    document.querySelector("#cpf").value =
                        cadastroSalvo.cpf;

                    document.querySelector("#data").value =
                        cadastroSalvo.data;

                    document.querySelector("#email").value =
                        cadastroSalvo.email;

                    document.querySelector("#telefone").value =
                        cadastroSalvo.telefone;

                    document.querySelector("#cep").value =
                        cadastroSalvo.cep;

                }


                const formCadastro =
                    document.querySelector("#form-cadastro");


                formCadastro.addEventListener("submit", function (event) {

                    event.preventDefault();


                    const nome =
                        document.querySelector("#nome").value.trim();

                    const cpf =
                        document.querySelector("#cpf").value.trim();

                    const data =
                        document.querySelector("#data").value.trim();

                    const email =
                        document.querySelector("#email").value.trim();

                    const telefone =
                        document.querySelector("#telefone").value.trim();

                    const cep =
                        document.querySelector("#cep").value.trim();


                    const cpfValido =
                        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

                    const telefoneValido =
                        /^\(\d{2}\) \d{4,5}-\d{4}$/;

                    const cepValido =
                        /^\d{5}-\d{3}$/;


                    const erroCpf =
                        document.querySelector("#erro-cpf");

                    const erroTelefone =
                        document.querySelector("#erro-telefone");

                    const erroCep =
                        document.querySelector("#erro-cep");

                    const mensagemSucesso =
                        document.querySelector("#mensagem-sucesso");


                    if (!nome || !cpf || !data || !email || !telefone || !cep) {

                        alert(
                            "Por favor, preencha todos os campos do formulário."
                        );

                        return;
                    }


                    if (!cpfValido.test(cpf)) {

                        erroCpf.style.display = "block";

                        return;

                    } else {

                        erroCpf.style.display = "none";

                    }


                    if (!telefoneValido.test(telefone)) {

                        erroTelefone.style.display = "block";

                        return;

                    } else {

                        erroTelefone.style.display = "none";

                    }


                    if (!cepValido.test(cep)) {

                        erroCep.style.display = "block";

                        return;

                    } else {

                        erroCep.style.display = "none";

                    }


                    const cadastro = {
                        nome,
                        cpf,
                        data,
                        email,
                        telefone,
                        cep
                    };


                    localStorage.setItem(
                        "cadastro",
                        JSON.stringify(cadastro)
                    );


                    mensagemSucesso.classList.add("visivel");

                });

            }

        });

    });

});