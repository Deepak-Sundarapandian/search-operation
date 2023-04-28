fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
                <td class="id">${product.id}</td>
				<td class="mobimg"> <img src='${product.image}'> </td>
				<td class="mobname">${product.name}</td>
				<td class="mobprice">${product.price}</td>
				<td class="mobstck">${product.stock}</td>
				<td class="mobcode">${product.productCode}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});



function myFun() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("data-output");
  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[0];

   
	var mobname = document.getElementsByClassName("mobname")[i];
	var mobprice = document.getElementsByClassName("mobprice")[i];
	var mobstock = document.getElementsByClassName("mobstck")[i];
	var mobcode = document.getElementsByClassName("mobcode")[i];

	let textValue2 = mobname.innerHTML
	let textValue3 = mobprice.innerHTML
	let textValue4 = mobstock.innerHTML
	let textValue5 = mobcode.innerHTML
	if (td) {
	   if (textValue2.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	  }
	  else if (textValue3.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	  }
	  else if (textValue4.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	  }
	  else if (textValue5.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	  }
	  else {
		tr[i].style.display = "none";
	  }
	}
  }
}
