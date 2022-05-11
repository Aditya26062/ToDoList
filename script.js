init();
function addItemTolist()
{
    let item = document.createElement('div');
    let iptext = document.querySelector('#inputBox').value;
    item.textContent = iptext;
    document.body.appendChild(item);
    
    item.classList.add('item');
    item.style.border='2px solid  salmon';
    item.style.width='800px';
    item.style.fontSize='35px';
    item.style.marginTop='10px';
}

function init()
{
    let p = document.querySelector('#inputBox');
    p.addEventListener('dblclick',addItemTolist);
}