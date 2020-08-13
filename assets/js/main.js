
var y = 5;


var tableADiv = document.getElementById("tableADiv");
var tableBDiv = document.getElementById("tableBDiv");
var tableCDiv = document.getElementById("tableCDiv");
var tableDDiv = document.getElementById("tableDDiv");
var tableEDiv = document.getElementById("tableEDiv");

var tableA = document.getElementById("tableA");
var tableB = document.getElementById("tableB");
var tableC = document.getElementById("tableC");
var tableD = document.getElementById("tableD");
var tableE = document.getElementById("tableE");

var muneA = document.getElementById("muneA");
var muneB = document.getElementById("muneB");
var muneC = document.getElementById("muneC");
var muneD = document.getElementById("muneD");
var muneE = document.getElementById("muneE");


/*  list= [[item1[name, price,imgsrc,type],item2,item3]   */
var listA = [["苹果",'$2','./images/A/苹果.jpg',"A"], ["梨",'$1','./images/A/梨.jpg',"A"], ["香蕉",'$3','./images/A/香蕉.jpg',"A"]];
var listB = ["梨", "Volvo", "BMW"];
var listC = ["Saab", "Volvo", "BMW"];
var listD = ["Saab", "Volvo", "BMW"];
var listE = ["Saab", "Volvo", "BMW"];

var shoppingCar =[];
var shoppingCarTable = document.getElementById("shoppingCarTable");

var inShoppingCarPage =0;
var shoppingCarButton = document.getElementById("shoppingCarButton");


var finalPrice = 0;
var finalPriceCell = document.getElementById("finalPriceCell");



function addItemToShoppingCar(item){
    item.parentElement.parentElement.childNodes[4].childNodes[0].textContent++;

    var itemIsInTheCar = 0;

    shoppingCar.forEach(function(element){ if(element[0] == item.parentElement.parentElement.childNodes[1].textContent){ 
        itemIsInTheCar = 1;
        element[2]++;
    }
                                         });

    if(itemIsInTheCar == 0){
        var tempItem=[item.parentElement.parentElement.childNodes[1].textContent,
                      item.parentElement.parentElement.childNodes[2].textContent,
                      item.parentElement.parentElement.childNodes[4].textContent,
                      item.parentElement.parentElement.childNodes[6].textContent,
                      item.parentElement.parentElement.childNodes[7].textContent,
                     ];
        shoppingCar.push(tempItem);
    }


}
/*  subItemFromShoppingCar  */
function subItemFromShoppingCar(item){


    var numberOfItem;
    numberOfItem=item.parentElement.parentElement.childNodes[4].childNodes[0].textContent;
    
    if(numberOfItem==0 || numberOfItem==1){
        for(var x=0;x < shoppingCar.length;x++){
            if(shoppingCar[x][0] == item.parentElement.parentElement.childNodes[1].textContent){ 
                numberOfItem =0;
                shoppingCar.splice(x, 1);
                break;
            }
        }
    }
    
    
    if(numberOfItem>1){
        numberOfItem--;

        for(var x=0;x < shoppingCar.length;x++){
            if(shoppingCar[x][0] == item.parentElement.parentElement.childNodes[1].textContent){ 
                shoppingCar[x][2]--;
                break;
            }
        }
        /*shoppingCar.forEach(function(element){ if(element[0] == item.parentElement.parentElement.childNodes[1].textContent){ 
            element[2]--;
            console.log(element[2]);
             break
        }});*/

    }
    item.parentElement.parentElement.childNodes[4].childNodes[0].textContent = numberOfItem;

}


function initTable(){
    /*Table A*/

    for(var x=0;x < listA.length;x++ ){
        var row = tableA.insertRow(tableA.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell6.style.borderRight = "1px solid black";

        var img = document.createElement('img');
        img.style.maxHeight="70px";
        img.style.margin="auto";
        img.src = listA[x][2];
        cell1.appendChild(img);

        cell2.innerHTML=listA[x][0];
        cell3.innerHTML=listA[x][1];

        // addbutton
        var addbutton = document. createElement("button");
        addbutton. innerHTML = "+";
        // 2. Append somewhere.
        cell4.appendChild(addbutton);

        addbutton.addEventListener ("click", function() {


            addItemToShoppingCar(this);

        });



        //text area
        var label = document.createElement("LABEL");
        label.className="itemNumberDisplay";
        label.innerHTML="0";
        cell5.appendChild(label);

        // subbutton
        var subbutton = document. createElement("button");
        subbutton. innerHTML = "-";
        // 2. Append somewhere.
        cell6.appendChild(subbutton);

        subbutton.addEventListener ("click", function() {
            subItemFromShoppingCar(this);
        });

        cell7.innerHTML=listA[x][2];
        cell7.style.display= "none";

        cell8.innerHTML=listA[x][3];
        cell8.style.display= "none";

    }







    /*Table B*/
    /*Table C*/
    /*Table D*/
    /*Table E*/

}

function initShoppingCarTable(){
    
    //init the fianl price
    finalPrice = 0;
    
    if(inShoppingCarPage ==0){
        shoppingCarButton.innerHTML ="返回";
        inShoppingCarPage =1;
    }else{
        shoppingCarButton.innerHTML ="结账";
        inShoppingCarPage =0;
    }
    
     
    for(var y=shoppingCarTable.rows.length-1; y > 0;y-- ){

        shoppingCarTable.deleteRow(y);
    }
    
    
    
    
    for(var x=0;x < shoppingCar.length;x++ ){
        var row = shoppingCarTable.insertRow(shoppingCarTable.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell4.style.borderRight = "1px solid black";

        var img = document.createElement('img');
        img.style.maxHeight="70px";
        img.style.margin="auto"; 
        img.src = shoppingCar[x][3];
        cell1.appendChild(img);

        cell2.innerHTML=shoppingCar[x][0];
        cell3.innerHTML=shoppingCar[x][1];
        cell4.innerHTML=shoppingCar[x][2];
             
        finalPrice = finalPrice+(parseInt(shoppingCar[x][1].slice(1, shoppingCar[x][1].length)) * parseInt(shoppingCar[x][2]));
        
    }
    
    if (shoppingCarTableDiv.style.display == "none") {
        shoppingCarTableDiv.style.display = "block";
        maintable.style.display = "none";
        tableADiv.style.display = "none";
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";
    } else{
        shoppingCarTableDiv.style.display = "none";
        maintable.style.display = "block";
        tableADiv.style.display = "block";
    }
    
    finalPriceCell.innerHTML = finalPrice;
  
} 

function getFinalPrice(){
    console.log(shoppingCar);
    
}

function creatFinalList(){
    
}







function showtableA() {

    muneA.style.backgroundColor ="lightblue";
    muneB.style.backgroundColor ="lightgray";
    muneC.style.backgroundColor ="lightgray";
    muneD.style.backgroundColor ="lightgray";
    muneE.style.backgroundColor ="lightgray";


    if (tableADiv.style.display === "none") {
        tableADiv.style.display = "block";
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";

    } else{
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";
    }
}

function showtableB() {

    muneA.style.backgroundColor ="lightgray";
    muneB.style.backgroundColor ="lightblue";
    muneC.style.backgroundColor ="lightgray";
    muneD.style.backgroundColor ="lightgray";
    muneE.style.backgroundColor ="lightgray";


    if (tableBDiv.style.display === "none") {
        tableBDiv.style.display = "block";
        tableADiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";
    } else{
        tableADiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";
    }
}


function showtableC() {

    muneA.style.backgroundColor ="lightgray";
    muneB.style.backgroundColor ="lightgray";
    muneC.style.backgroundColor ="lightblue";
    muneD.style.backgroundColor ="lightgray";
    muneE.style.backgroundColor ="lightgray";


    if (tableCDiv.style.display === "none") {
        tableCDiv.style.display = "block";
        tableBDiv.style.display = "none";
        tableADiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";
    } else{
        tableBDiv.style.display = "none";
        tableADiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableEDiv.style.display = "none";
    }
}

function showtableD() {

    muneA.style.backgroundColor ="lightgray";
    muneB.style.backgroundColor ="lightgray";
    muneC.style.backgroundColor ="lightgray";
    muneD.style.backgroundColor ="lightblue";
    muneE.style.backgroundColor ="lightgray";

    if (tableDDiv.style.display === "none") {
        tableDDiv.style.display = "block";
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableADiv.style.display = "none";
        tableEDiv.style.display = "none";
    } else{
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableADiv.style.display = "none";
        tableEDiv.style.display = "none";
    }
}
function showtableE() {

    muneA.style.backgroundColor ="lightgray";
    muneB.style.backgroundColor ="lightgray";
    muneC.style.backgroundColor ="lightgray";
    muneD.style.backgroundColor ="lightgray";
    muneE.style.backgroundColor ="lightblue";




    if (tableEDiv.style.display === "none") {
        tableEDiv.style.display = "block";
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableADiv.style.display = "none";
    } else{
        tableBDiv.style.display = "none";
        tableCDiv.style.display = "none";
        tableDDiv.style.display = "none";
        tableADiv.style.display = "none";
    }
}
