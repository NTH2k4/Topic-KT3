let index = 0;
const items = document.querySelectorAll('.slide-item .imga');

function showItem() {
	for (let i = 1; i < items.length; i++ ) {
		items[i].style.display = 'none';
	}
}

function turn_right() {
	if (index == items.length - 1) return;	
	items[index].style.display = 'none';
	index++;
	items[index].style.display = 'block';
}

function turn_left() {
	if (index == 0) return;
	items[index].style.display = 'none';
	index--;
	items[index].style.display = 'block';
}

showItem();