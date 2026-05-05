let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = document.getElementById('id').value

    fetch(`http://localhost:3000/carro/${id}`)
    .then(res => res.json())
    .then(dados =>{
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Nome: ${dados.nome}</p>`
        resposta.innerHTML += `<p>marca: ${dados.marca}</p>`  
        resposta.innerHTML += `<p>categoria: ${dados.categoria}</p>`
        resposta.innerHTML += `<p>ano: ${dados.ano}</p>`
        resposta.innerHTML += `<p>precoFab: ${dados.precoFab}</p>`
        resposta.innerHTML += `<p>precoVend: ${dados.precoVend}</p>`
        document.querySelector('form').reset()
    })
    .catch((err)=>{
        console.error('Erro ao consultar o carro',err)
    })
})