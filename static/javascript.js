function submitName() {
            const name = document.getElementById('nameInput').value;
            if (name) {
                // Envia o nome para o servidor via requisição POST
                fetch('/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: name })
                })
                .then(response => {
                    if (response.ok) {
                        // Redireciona para outra página após salvar no banco
                        window.location.href = "/mensagem.html";
                    } else {
                        console.error('Erro ao salvar o nome.');
                    }
                })
                .catch(error => {
                    console.error('Erro de rede:', error);
                });
            }
            // Evita o recarregamento da página
            return false;
        }