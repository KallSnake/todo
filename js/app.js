// alert("Funcionou");

var listElement = document.querySelector("#app ul");

var inputElement = document.querySelector("#app input");

var buttonElement = document.querySelector("#app button");




var todos = JSON.parse(localStorage.getItem("list_todos")) || [];




function renderTodos() {


    // Tudo que tiver dentro da ul vai ficar como fazio (removendo todos os elementos do listElement)
    listElement.innerHTML = "";


    for ( todo of todos ) {

        // console.log(todo);

        var todoElement = document.createElement("li");

        var todoText = document.createTextNode(todo);



        var linkElement = document.createElement("a");

        linkElement.setAttribute("href", "#");



        // Procurar no Array "todos" o indice (posição)
        var pos = todos.indexOf(todo);

        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");


        var linkText = document.createTextNode(" Excluir");


        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }


}


renderTodos();



function addTodo() {

   
    var todoText = inputElement.value;


     /*
    todos.push(todoText);

    inputElement.value = "";

    renderTodos();

    saveToStorage();
    */



    if ( todoText != "" ) {


		// Gravando no Local Storage
		
        todos.push(todoText);

        renderTodos();

        saveToStorage();


		// inner.HTML = atribui conteúdo interno, ou seja, dentro de uma determinada tag html  
		document.getElementById("modal_titulo").innerHTML = "Registro inserido com sucesso";


		// atribuido classe ao elemento selecionado
		document.getElementById("modal_titulo_div").className = "modal-header text-success";


		// inner.HTML = atribui conteúdo interno, ou seja, dentro de uma determinada tag html 
		document.getElementById("modal_conteudo").innerHTML = "Todo foi cadastrada com sucesso!";


		//
		document.getElementById("modal_btn").className = "btn btn-outline-success";


		//
		document.getElementById("modal_btn").innerHTML = "voltar";



		// dialogo de sucesso
		$("#modalRegistroDespesa").modal("show");

        // Limpando os campos após gravação
        
        inputElement.value = "";
	

	} else {


		// inner.HTML = atribui conteúdo interno, ou seja, dentro de uma determinada tag html 
		document.getElementById("modal_titulo").innerHTML = "Erro na inclusão do registro";


		// atribuido classe ao elemento selecionado
		document.getElementById("modal_titulo_div").className = "modal-header text-danger";


		// inner.HTML = atribui conteúdo interno, ou seja, dentro de uma determinada tag html 
		document.getElementById("modal_conteudo").innerHTML = "Erro na gravação, verifique se o campo foi preenchido corretamente!";


		//
		document.getElementById("modal_btn").className = "btn btn-outline-danger";


		//
		document.getElementById("modal_btn").innerHTML = "voltar e corrigir";



		// dialogo de erro
		$("#modalRegistroDespesa").modal("show");

	}



}



buttonElement.onclick = addTodo;



function deleteTodo(pos) {


    todos.splice(pos, 1);

    renderTodos();

    saveToStorage();


}




function saveToStorage() {


    localStorage.setItem("list_todos", JSON.stringify(todos));
}