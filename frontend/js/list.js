let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/carro')
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
        resposta.innerHTML = ''  // apaga a escrita anterrior
        resposta.innerHTML += `
            <table>
                ${thead()}
                ${tbody(dados)}
            </table>
        `
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o carro',err)
    })
})


function thead(){
    let cabTabela = `
    <thead>
        <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>marca</th>
            <th>categoria</th>
            <th>ano</th>
            <th>precoFab</th>
            <th>precoVend</th>
        </tr>
    </thead>    
    `
    return cabTabela
}

function tbody(dados){
    let tabela = `<tbody>`
    dados.forEach(el => {
        tabela +=`
        <tr>        
            <td>${el.codPaciente}</td>
            <td>${el.nome}</td>
            <td>${el.marca}</td>
            <td>${el.categoria}</td>
            <td>${el.ano}</td>
            <td>${el.precoFab}</td>
            <td>${el.precoVend}</td>
        </tr>
        `
    })
    tabela += `</tbody>`
    return tabela
}