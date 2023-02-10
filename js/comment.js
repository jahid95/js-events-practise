document.getElementById('post-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    
    const commentContainer = document.getElementById('comment-container');

    const p = document.createElement('p');
    p.innerText = inputText;
    commentContainer.appendChild(p);

    inputField.value ='';
})


function makeRed(){
    document.body.style.backgroundColor = 'red';
}