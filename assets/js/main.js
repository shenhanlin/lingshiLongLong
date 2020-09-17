
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
var listA = [["来伊份无核陈皮梅",'$9.4','./images/A/来伊份无核陈皮梅.png',"A"], ["黄飞红小虾麻辣花生",'$5.5','./images/A/黄飞红小虾麻辣花生.png',"A"], ["黄飞红麻辣花生",'$5.5','./images/A/黄飞红麻辣花生.png',"A"]];



var listB = [["劲仔厚豆干泡椒味",'$7','./images/B/劲仔厚豆干泡椒味.png',"B"], ["劲仔厚豆干香辣味",'$7','./images/B/劲仔厚豆干香辣味.png',"B"], ["劲仔厚豆干麻辣味",'$7','./images/B/劲仔厚豆干麻辣味.png',"B"], ["劲仔小鱼香辣味",'$6.2','./images/B/劲仔小鱼香辣味.png',"B"], ["北海道丸字蟹肉卷",'$5.5','./images/B/北海道丸字蟹肉卷.png',"B"], ["卫龙亲嘴豆皮",'$1.6','./images/B/卫龙亲嘴豆皮.png',"B"], ["卫龙麻辣土豆片",'$3.2','./images/B/卫龙麻辣土豆片.png',"B"], ["来伊份菇肉卷",'$4','./images/B/来伊份菇肉卷.png',"B"]];

var listC = [["AD钙奶",'$1','./images/C/AD钙奶.png',"C"], 
             ["东方树叶茉莉花茶",'$2','./images/C/东方树叶茉莉花茶.png',"C"], 
             ["水溶C100",'$2','./images/C/水溶C100.png',"C"], 
             ["爆摇烤香奶茶",'$2.7','./images/C/爆摇烤香奶茶.png',"C"], 
             ["爆摇蜜香奶茶",'$2.7','./images/C/爆摇蜜香奶茶.png',"C"], 
             ["爆摇阿萨姆奶茶",'$2.7','./images/C/爆摇阿萨姆奶茶.png',"C"], 
             ["韩国DR.LIV低糖低卡蒟蒻果冻西柚味",'$2','./images/C/韩国DR.LIV低糖低卡蒟蒻果冻西柚味.png',"C"], 
             ["韩国DR.LIV卡蒟蒻果冻芒果味",'$2','./images/C/韩国DR.LIV卡蒟蒻果冻芒果味.png',"C"], 
             ["韩国DR.LIV蒟蒻果冻苹果味",'$2','./images/C/韩国DR.LIV蒟蒻果冻苹果味.png',"C"], 
             [" 香港兰芳园丝袜奶茶",'$4.5','./images/C/香港兰芳园丝袜奶茶.png',"C"]];

var listD = [["日本果冻异果味",'$3','./images/D/日本果冻异果味.png',"D"], 
             ["日本果冻梅子味",'$3','./images/D/日本果冻梅子味.png',"D"], 
             ["日本果冻苹果味",'$3','./images/D/日本果冻苹果味.png',"D"], 
             ["日本果冻葡萄味",'$3','./images/D/日本果冻葡萄味.png',"D"], 
             ["日本果冻蜜桃味",'$3','./images/D/日本果冻蜜桃味.png',"D"], 
             ["日本果冻青提味",'$3','./images/D/日本果冻青提味.png',"D"], 
             ["江湖酸辣粉",'$4.3','./images/D/江湖酸辣粉.png',"D"], 
             ["禛香肥牛大豆素肉",'$1.5','./images/D/禛香肥牛大豆素肉.png',"D"], 
             ["食族人锡纸花甲粉",'$4.2','./images/D/食族人锡纸花甲粉.png',"D"], 
             ["食族人麻辣爆肚粉",'$4.2','./images/D/食族人麻辣爆肚粉.png',"D"]];

var listE = [["乐事墨西哥鸡汁番茄味",'$2.8','./images/E/乐事墨西哥鸡汁番茄味.png',"E"],
             ["乐事黄金炒蟹味",'$2.8','./images/E/乐事黄金炒蟹味.png',"E"],
             ["乐视意大利香浓红烩味",'$2.8','./images/E/乐视意大利香浓红烩味.png',"E"],
             ["咪咪虾条",'$2','./images/E/咪咪虾条.png',"E"] ];


var shoppingCar =[];
var shoppingCarTable = document.getElementById("shoppingCarTable");

var inShoppingCarPage =0;
var shoppingCarButton = document.getElementById("shoppingCarButton");


var finalPrice = 0;
var finalPriceCell = document.getElementById("finalPriceCell");

var infinalList =0;

var purchaseOrderTable = document.getElementById("purchaseOrderTable");



function addItemToShoppingCar(item){
    item.parentElement.parentElement.childNodes[1].childNodes[0].textContent++;

    var itemIsInTheCar = 0;


    shoppingCar.forEach(function(element){ if(element[1] == item.parentElement.parentElement.childNodes[3].textContent){ 

        itemIsInTheCar = 1;
        element[0]++;
    }
                                         });

    if(itemIsInTheCar == 0){
        var tempItem=[item.parentElement.parentElement.childNodes[1].textContent, //number
                      item.parentElement.parentElement.childNodes[3].textContent, //name
                      item.parentElement.parentElement.childNodes[4].textContent, //price
                      item.parentElement.parentElement.childNodes[5].textContent, //img src
                      item.parentElement.parentElement.childNodes[6].textContent  //type
                     ];

        shoppingCar.push(tempItem);
    }


}

/*  subItemFromShoppingCar  */
function subItemFromShoppingCar(item){


    var numberOfItem;
    numberOfItem=item.parentElement.parentElement.childNodes[1].childNodes[0].textContent;

    console.log(shoppingCar);

    if(numberOfItem==0 || numberOfItem==1){
        for(var x=0;x < shoppingCar.length;x++){
            if(shoppingCar[x][1] == item.parentElement.parentElement.childNodes[3].textContent){ 
                numberOfItem =0;
                shoppingCar.splice(x, 1);
                break;
            }
        }
    }


    if(numberOfItem>1){
        numberOfItem--;

        for(var x=0;x < shoppingCar.length;x++){
            if(shoppingCar[x][1] == item.parentElement.parentElement.childNodes[3].textContent){ 
                shoppingCar[x][0]--;
                break;
            }
        }

    }
    item.parentElement.parentElement.childNodes[1].childNodes[0].textContent = numberOfItem;

}


function initTable(listA,tableA){

    for(var x=0;x < listA.length;x++ ){

        var row1 = tableA.insertRow(tableA.rows.length);
        var row2 = tableA.insertRow(tableA.rows.length);


        var cell11 = row1.insertCell(0);
        var cell12 = row1.insertCell(1);
        var cell13 = row1.insertCell(2);

        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        var cell23 = row2.insertCell(2);
        var cell24 = row2.insertCell(3);
        var cell25 = row2.insertCell(4);
        var cell26 = row2.insertCell(5);
        var cell27 = row2.insertCell(6);


        cell11.rowSpan = "2";
        cell12.rowSpan = "2";
        cell13.colSpan = "3";
        cell13.innerHTML=listA[x][0];
        cell13.style.borderRight = "1px solid #121d2561";
        cell13.style.borderBottom= "none";



        var img = document.createElement('img');
        img.style.maxHeight="70px";
        img.style.margin="auto";
        img.src = listA[x][2];
        img.setAttribute('onclick','showBigImageCover(this)');
        cell11.appendChild(img);
         

        cell12.innerHTML=listA[x][1];

        // addbutton
        var addbutton = document. createElement("button");
        addbutton. innerHTML = "+";
        // 2. Append somewhere.
        cell21.appendChild(addbutton);
        cell21.style.borderRight = "none";
        cell21.style.borderTop = "none";


        addbutton.addEventListener ("click", function() {
            addItemToShoppingCar(this);

        });



        //text area
        var label = document.createElement("LABEL");
        label.className="itemNumberDisplay";
        label.innerHTML="0";
        cell22.appendChild(label);
        cell22.style.borderRight = "none";
        cell22.style.borderLeft = "none";
        cell22.style.borderTop = "none";

        // subbutton
        var subbutton = document. createElement("button");
        subbutton. innerHTML = "-";
        // 2. Append somewhere.
        cell23.appendChild(subbutton);
        cell23.style.borderLeft = "none";
        cell23.style.borderRight = "1px solid #121d2561";
        cell23.style.borderTop = "none";

        subbutton.addEventListener ("click", function() {
            subItemFromShoppingCar(this);
        });

        cell24.innerHTML=listA[x][0];
        cell24.style.display= "none";

        cell25.innerHTML=listA[x][1];
        cell25.style.display= "none";

        cell26.innerHTML=listA[x][2];
        cell26.style.display= "none";

        cell27.innerHTML=listA[x][3];
        cell27.style.display= "none";
    }



    /*Table A*/

    /*for(var x=0;x < listA.length;x++ ){
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

    }*/







    /*Table B*/


    /*Table C*/
    /*Table D*/
    /*Table E*/

}

function initAllTable(){
    showtableA();
    initTable(listA,tableA);
    initTable(listB,tableB);
    initTable(listC,tableC);
    initTable(listD,tableD);
    initTable(listE,tableE);
}

function initShoppingCarTable(){

    //init the fianl price
    finalPrice = 0;

    if(inShoppingCarPage ==0 &&infinalList ==0){
        shoppingCarButton.innerHTML ="继续购物";
        inShoppingCarPage =1;
    }else if(inShoppingCarPage ==1 &&infinalList ==0){
        shoppingCarButton.innerHTML ="去结算";
        inShoppingCarPage =0;
    }

    if(infinalList == 1){
        shoppingCarButton.innerHTML ="去结算";
        shoppingCarButton.className="shoppingCarButton";
        inShoppingCarPage=0;
        infinalList =0;
        showtableA();
        document.getElementById("footCover").style.display = "block";
        shoppingCarTableDiv.style.display = "block";
        purchaseOrderDiv.style.display = "none";

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

        cell2.innerHTML=shoppingCar[x][1];
        cell3.innerHTML=shoppingCar[x][2];
        cell4.innerHTML=shoppingCar[x][0];

        console.log(shoppingCar[x]);


        finalPrice = finalPrice+(parseInt(shoppingCar[x][2].slice(1, shoppingCar[x][2].length)) * parseInt(shoppingCar[x][0]));

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

    console.log(finalPrice);
    finalPriceCell.innerHTML = finalPrice;

} 


function getFinalPrice(){
    console.log(shoppingCar);

}

function minshoppingCarButton() {
    shoppingCarButton=document.getElementById("shoppingCarButton");
    shoppingCarButton.className="shoppingCarButtonMin";
    shoppingCarButton.innerHTML="&#8592";
}



function creatFinalList() {
    infinalList = 1;
    purchaseOrderDiv.style.display = "block";
    tableEDiv.style.display = "none";
    tableBDiv.style.display = "none";
    tableCDiv.style.display = "none";
    tableDDiv.style.display = "none";
    tableADiv.style.display = "none";
    document.getElementById("footCover").style.display = "none";
    shoppingCarTableDiv.style.display = "none";
    minshoppingCarButton();

    for(var y=purchaseOrderTable.rows.length-1; y >= 0;y-- ){

        purchaseOrderTable.deleteRow(y);
    }


    for(var x=0;x < shoppingCar.length;x++ ){
        

        
        
        var row = purchaseOrderTable.insertRow(purchaseOrderTable.rows.length);
        
        if(shoppingCar.length - x == 1){
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
        }
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML=shoppingCar[x][1];
        cell2.innerHTML=shoppingCar[x][0];


        if(shoppingCar.length - x >= 2){
            x++;
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML=shoppingCar[x][1];
            cell2.innerHTML=shoppingCar[x][0];

        }


    }

    var row = purchaseOrderTable.insertRow(purchaseOrderTable.rows.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML="$"+finalPrice;
    cell1.colSpan = "2";


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
function showBigImageCover(item){
    document.getElementById("bigImageCover").style.display = "block";
    document.getElementById("bigImage").src = item.src;
     console.log(item.src);
}
function hidBigImageCover(){
    document.getElementById("bigImageCover").style.display = "none";
    
}


