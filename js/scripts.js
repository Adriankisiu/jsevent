var list = document.getElementById('list'),
	add = document.getElementById('addElem');

list.addEventListener('click', function(e) {
	var insert = document.getElementsByTagName("li");
	var changeinsert = insert[1].innerHTML += '0';
});

add.addEventListener('click', function(e) {
  list.innerHTML +='<li>item</li>';
});