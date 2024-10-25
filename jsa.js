
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;		
        }

        getInfo() {
            return [this.nome, this.idade];
        }
    }

    const btn = document.getElementById("add");
    const res = document.querySelector(".res");
    let pessoas = [];

    btn.addEventListener("click", () => {
        const nome = document.querySelector("#f_nome").value;
        const idade = document.querySelector("#f_idade").value;

        const p = new Pessoa(nome, idade);
        pessoas.push(p); // Adiciona a nova pessoa ao array

        // Atualiza a exibição na div .res
        res.innerHTML += `<p> Nome: ${p.nome}<br>Idade: ${p.idade}</p>`;
        
        console.log(p.getInfo()); // Exibe as informações no console
        
        // Limpa os campos de entrada
        document.querySelector("#f_nome").value = '';
        document.querySelector("#f_idade").value = '';
		
	        document.querySelector("#f_nome").focus()
    });
