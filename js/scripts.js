var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var insert = document.getElementsByTagName("li").length;
    element.innerHTML = 'item ' +insert;
    list.appendChild(element)
});

