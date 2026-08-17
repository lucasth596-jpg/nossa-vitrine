const opcoes = document.querySelectorAll(
    'input[name="pagamento"]'
);

const dadosPagamento =
    document.getElementById("dadosPagamento");

opcoes.forEach(opcao => {

    opcao.addEventListener("change", function () {

        if (this.value === "pix") {

            dadosPagamento.innerHTML = `
                <h3>💠 Pagamento via PIX</h3>
                <p>Na próxima etapa será gerado o PIX para pagamento.</p>
            `;

        }

        else if (this.value === "credito") {

            dadosPagamento.innerHTML = `
                <h3>💳 Cartão de crédito</h3>

                <input
                    type="text"
                    placeholder="Número do cartão"
                >

                <input
                    type="text"
                    placeholder="Nome no cartão"
                >

                <input
                    type="text"
                    placeholder="Validade"
                >

                <input
                    type="text"
                    placeholder="CVV"
                >
            `;

        }

        else if (this.value === "debito") {

            dadosPagamento.innerHTML = `
                <h3>💳 Cartão de débito</h3>

                <p>
                    Na próxima etapa você poderá
                    continuar com o pagamento.
                </p>
            `;

        }

        else if (this.value === "boleto") {

            dadosPagamento.innerHTML = `
                <h3>🧾 Boleto bancário</h3>

                <p>
                    O boleto será gerado após a confirmação
                    do pedido.
                </p>
            `;

        }

    });

});


function continuarPagamento() {

    const selecionado =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );

    const mensagem =
        document.getElementById("mensagem");

    if (!selecionado) {

        mensagem.textContent =
            "⚠️ Escolha uma forma de pagamento.";

        return;
    }

    if (selecionado.value === "pix") {

        mensagem.textContent =
            "💠 PIX selecionado. Vamos para a etapa de pagamento.";

    }

    else if (selecionado.value === "credito") {

        mensagem.textContent =
            "💳 Cartão de crédito selecionado.";

    }

    else if (selecionado.value === "debito") {

        mensagem.textContent =
            "💳 Cartão de débito selecionado.";

    }

    else if (selecionado.value === "boleto") {

        mensagem.textContent =
            "🧾 Boleto selecionado.";

    }

}