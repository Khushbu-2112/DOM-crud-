var tea = ['Chai','Green Tea','Black Tea','Coffee','Cold Coffee','Cold Coco'];
var teaPrice = tea.map((n)=>n.length*10);
//console.log(teaPrice);
var drinks = ['Ma zaa','ButterMilk','Fenta','Thumbs Up','MounteinDuo','Appy Fizz','Coco cola','Minutemade','SevenUP','Sprite'];
var drinksPrice = tea.map((n)=>(n.length*2)+2);
//console.log(drinksPrice);
var snacks = ['Smosa','Paratha','Bread','Muskabun','Dabeli','Vadapau','Vegetable Pizza'];
var snacksPrice = tea.map((n)=>n.length*5);
//console.log(snacksPrice);

var menu = document.querySelectorAll('.menu li a');
//console.log(menu[0]);

var orderBox = document.querySelector('.order');
var ul= document.querySelector('.order ul');
var billBox = document.querySelector('.bill');

//show menu for order
menu[0].addEventListener('click',()=>showMenu(tea,teaPrice));
menu[1].addEventListener('click',()=>showMenu(drinks,drinksPrice));
menu[2].addEventListener('click',()=>showMenu(snacks,snacksPrice));

function showMenu(a,b)
{
    ul.innerHTML="";
    for(let i=0,j=0;i<a.length,j<b.length;i++,j++)
    {
        var nodeli = document.createElement('li');
        nodeli.innerHTML += `${a[i]} <label>${b[j]}</label>`;
        ul.appendChild(nodeli);

        nodeli.addEventListener('dblclick',()=>
        {
            var push=event.target;
            billBox.appendChild(push);
            push.addEventListener('click',()=>del());
            totalShow(); 
        });
    }
}


//show bill
var totalBox = document.getElementById('total');

function totalShow()
{
    let total=0;
    for(i=0;i<billBox.childElementCount;i++){
        let h = billBox.children[i];
        if(h.childElementCount!=0)
        {
            let val = h.children[0].innerHTML;
            total+=+val;
        }
    }
    totalBox.innerHTML = 'Total :'+total;
}

function del()
{
    billBox.removeChild(event.target);
    ul.appendChild(event.target);
    totalShow();
}