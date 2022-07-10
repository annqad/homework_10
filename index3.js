const textArea = document.getElementById('textarea')

const txtlocalStorage = localStorage.getItem("textArea");
if (txtlocalStorage){
	textArea.value = txtlocalStorage;
};
textArea.oninput = () => {
	localStorage.setItem("textArea",textArea.value);
};
let area = localStorage.setItem("text", textArea);




let array = [1, 2, 3, 4, 5];
array.splice(1, 0 , 'a', 'b')
array.splice(6, 0, 'c')
array.splice(8, 0, 'e')

console.log(array)