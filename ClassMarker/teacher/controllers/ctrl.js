window.addEventListener('load', init);

function init() {
	bindEvents();
	updateCount();
}

function bindEvents() {
	document.querySelector('#add').addEventListener('click', addQuestion);
}

function updateCount() {
    document.querySelector('#total').innerText = questionOperations.questions.length;
    document.querySelector('#Marker').innerText = marked(id);
}

function addQuestion() {
	var questionObject = new Question();
	for (let key in questionObject) {
		questionObject[key] = document.querySelector('#' + key).value;
	}
	questionOperations.add(questionObject);
    printQuestion(questionObject);
    updateCount();
}

function printQuestion(questionObject) {
	var tbody = document.querySelector('#questions');
	var tr = tbody.insertRow();
	var index = 0;
	for (let keyPrint in questionObject) {
		let td = tr.insertCell(index);
		td.innerText = questionObject[keyPrint];
		index++;
	}
	let td = tr.insertCell(index);
	var id = questionObject.id;
	td.appendChild(editIcon());
    td.appendChild(deleIcon(id));
    updateCount();
	// td.appendChild(createIcon('https://image.flaticon.com/icons/png/128/61/61456.png'));
	//https://image.flaticon.com/icons/png/128/61/61456.png
}
// function createIcon(path) {
//     var img = document.createElement('img');
//     img.src = path;
//     img.className = 'size';
//     return img;
// }
function editIcon() {
	var span = document.createElement('span');
	var img = document.createElement('img');
	img.src = 'https://image.flaticon.com/icons/png/128/61/61456.png';
	img.className = 'size';
	span.className = 'edit-icon';
	span.appendChild(img);
	return span;
}

function deleIcon(id) {
	var span = document.createElement('span');
	var img = document.createElement('img');
	img.src = 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png';
	img.className = 'size';
	span.className = 'delete-icon';
	span.setAttribute('qid', id);
	span.appendChild(img);
	span.addEventListener('click', deleteQuestion);
	return span;
}


function deleteQuestion(id) {
	var id = this.id;
    questionOperations.search(id);
	this.parentNode.parentNode.classList.toggle('alert-danger');
}

function marked(id){
    questionOperations.toggle(id);
}

// function findQuestion(){
//     var questionObject = new Question();  
//     for (let key in questionObject) {
//        let getId = questionObject[key];
//     }
//     questionOperations.search(questionObject);
//}