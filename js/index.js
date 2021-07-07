//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
element.innerHTML = 'Hello from JS';

document.body.appendChild(element);

element.remove();
