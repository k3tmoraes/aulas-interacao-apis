const cepInput = document.querySelector("#cep")

cepInput.addEventListener("blur",()=>{

    const cep = cepInput.ariaValueMax.replace(/\D/g,'')
    if(cep.length === 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!data.erro){
                document.querySelector
                ("#logradouro").value = data.
                logradouro

                document.querySelector
                ("#complememto").value = data.
                complemento

                document.querySelector
                ("#bairro").value = data.
                bairro

                document.querySelector
                ("#cidade").value = localidade
                cidade

                document.querySelector
                ("#estdao").value = data.
                uf

                
            }

            else{
                console.log("CEP não encontrado")
            }
        })
       
    }else{
        alert("CEP Inválido")
    }
})



/*
sobre a regex /\D/g
/.../ - Delimita a expressão regular

\D - É o inverso de \d, ou seja, "qualquer caractere que não seja digito" (0 a 9)

g - É a flag global, que faz a substituição ocorrer em todas a ocorrencias do texto.

EX:

Se o usuário digita 88.000-000
A função fará '88.000-000' . replace(/\D/g,'') //
Resultado: '88000000'
*/
