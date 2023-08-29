function buscarCEP() { //função requerida pelo botão no HTML  

  // Entrada
  var entrada = document.getElementById('buscar_cep').value; //cria a var e armazena o valor digitado

  //saida // variáveis criadas para retornar os valores para o HTML
  // ao primeiro objeto com valor especificado para cada ID
  var cep = document.getElementById('cep');
  var logradouro = document.getElementById('logradouro');
  var bairro = document.getElementById('bairro');
  var cidade = document.getElementById('cidade');
  var estado = document.getElementById('estado');
  var ddd = document.getElementById('ddd');

  //cria objeto xhr
  var xhr = new XMLHttpRequest(); //usa o objeto XHR para consulta ajax
  xhr.responseType = "json"; //informo o tipo de formato esperado
  //permite fazer consulta assíncrona com servidor remoto
  //envia requisição
  xhr.open('GET',
    "https://viacep.com.br/ws/" + entrada + "/json/"); //osa a função .open() com parâmetros GET, site e entrada
  xhr.send(); //envia dados que queremos

  xhr.onreadystatechange = () => {// informa que esta pronto para receber do servidor

    if (xhr.readyState == 4 && xhr.status == 200) {//verifica se esta pronto e o status

      //mostra resultado na tela
      console.log(xhr.response); //informa no console o resultado que recebeu do servidor

      //grava valores
      //pega cada valor do json e armazena nas variáveis criadas e envia para o HTML em cada ID
      cep.innerText = xhr.response.cep;
      logradouro.innerText = xhr.response.logradouro;
      bairro.innerText = xhr.response.bairro;
      cidade.innerText = xhr.response.localidade;
      estado.innerText = xhr.response.uf;
      ddd.innerText = xhr.response.ddd;
    }
  }
}