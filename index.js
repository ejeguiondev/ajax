let http = new XMLHttpRequest()
http.open('GET','https://jsonplaceholder.typicode.com/posts',true)
http.open('GET','texto.txt',true)
http.onload = function(){
    if (http.status == 200){

        let respuesta =  http.responseText
        console.log(respuesta)

    }
}
http.send()
//metodo con jquery
$.ajax({
    url:'texto.txt',
    asdasd:'GET',
    success: function(result){
        console.log('resp2: '+result)
    },
    error: function(error){
        console.log(error)
    }
})
//metodo 2 con jquery
$.get('texto.txt',function(data,status){
    console.log('resp3: '+data)
})
//post con jquery (esto solo anda con json no con archivos de texto)
let data = {
    name:"pepe",
    id:123
}
$.post('https://jsonplaceholder.typicode.com/posts',data,function(data,status){
    console.log(`${data} status: ${status}`)
})
//solo agarra datos json
$.getJSON('https://jsonplaceholder.typicode.com/posts',function(text){
    console.log(text)
})

//fech
let url = 'ejemplo.json'

fetch(url)
.then(data => data.json())
.then(res => console.log(res))
.catch(err => console.log(err))

async function ver(){
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
    console.log("!!!")
}

ver()