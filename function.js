let arr=[]


loadProduct()


function addProduct(){
    const productName= document.getElementById("productName").value
    const productPrice= document.getElementById("productPrice").value
    const productCategory= document.getElementById("productCategory").value
    const productImage= document.getElementById("productImage").value
    const productTable= document.getElementById("productTable")


   
    const product={      // if we need to organize or compare certain products in the future
        productName: productName,
        productPrice: productPrice,
        productCategory: productCategory,
        productImage: productImage
    }
    
     arr.push(product) // organize in a list 

    document.getElementById("messageErrorName").innerHTML=""
    document.getElementById("messageErrorPrice").innerHTML=""
    document.getElementById("messageErrorCategory").innerHTML=""
    document.getElementById("messageErrorImage").innerHTML=""

    if (!productName){
        event.preventDefault()
        document.getElementById("productName").focus()
     
        document.getElementById("messageErrorName").innerHTML=" * Missing product name *"
        return


    }
    if (productName.length < 3 ){
        event.preventDefault()
        document.getElementById("productName").focus()
        document.getElementById("messageErrorName").innerHTML="* To short product name *"
        return
    }

    if (productName.length >20  ){
        event.preventDefault()
        document.getElementById("productName").focus()
        document.getElementById("messageErrorName").innerHTML="* To long product name *"
        return
    }
    if (!productPrice ){
        event.preventDefault()
        document.getElementById("productPrice").focus()
        document.getElementById("messageErrorPrice").innerHTML="* Missing product price *"
        return
    }
    if (productPrice <=0 || productPrice>100 ){
        event.preventDefault()
        document.getElementById("productPrice").focus()
        document.getElementById("messageErrorPrice").innerHTML="* Invalid product price, enter price between 1 and 100 *"
        return
    }

    if (document.getElementById("productCategory").selectedIndex===0){
        event.preventDefault()
        document.getElementById("productCategory").focus()
        document.getElementById("messageErrorCategory").innerHTML="* Missing product Category *"
        return
    }
   
    
    if (!productImage){
        event.preventDefault()
        document.getElementById("productImage").focus()
        document.getElementById("messageErrorImage").innerHTML="* Missing Product Image *"
        return
    }

    if (productImage.length <3 ){
        event.preventDefault()
        document.getElementById("productImage").focus()
        document.getElementById("messageErrorImage").innerHTML="* To short url of Product Image *"
        return
    }




    let i=1
    let html = ` <tr>
                    <td> ${productName}</td>
                    <td> ${productPrice} </td>
                    <td> ${productCategory} </td>
                    <td><img  style="width: 90px; height: 90px;" src="${productImage}"> </td>
                    <td> <button class="myButton btn btn-outline-secondary" onclick="document.getElementById('productTable').deleteRow(${i-1})"> Reset </button>
                 </tr>
                    `
    i++
    productTable.innerHTML+= html




    

    etoile()

    setTimeout(()=>{
        document.getElementById("etoile").innerHTML=""
    },2200)

  
    }

    






// function saveProduct(){
//     localStorage.removeItem("productTable")
//     const productTable= document.getElementById("productTable").innerHTML
//     if(productTable ===""){
//         localStorage.setItem("productTable", productTable)
//         icon()

//         console.log(productTable)
//         setTimeout(()=>{
//             document.getElementById("icon").innerHTML=""
//         },2200)
        

//     }
//     else{
//         document.getElementById("icon").innerHTML="* The table is empty *"
//         setTimeout(()=>{
//             document.getElementById("icon").innerHTML=""
//         },2200)
        

//     }
    
    
//     loadProduct()
   
// }


function saveProduct() {
    
    
    const productTableBody = document.getElementById("productTable");
    const rows = productTableBody.getElementsByTagName("tr");

    
    if (rows.length > 0) {

        localStorage.removeItem("productTable");
        const productTableHTML = productTableBody.innerHTML;
        localStorage.setItem("productTable", productTableHTML);
        icon();

        setTimeout(() => {
            document.getElementById("icon").innerHTML = "";
        }, 2200);
    } else {
        document.getElementById("tableEmpty").innerHTML = "* the table is empty *";
        setTimeout(() => {
            document.getElementById("tableEmpty").innerHTML = "";
        }, 2200);
    }

    // loadProduct();
}







function loadProduct(){

  
    const getProduct= localStorage.getItem("productTable")
    if (getProduct ){
        document.getElementById("productTable").innerHTML= getProduct

    }
}

function icon(){
    document.getElementById("icon").innerHTML= `<img class="myIcon" style="height:40px; width:40px" src=assets/images/saveGif.gif>`

}


function etoile(){
    document.getElementById("etoile").innerHTML= `<img class="myEtoile" style="height:35px; width:35px; " src=assets/images/icons8-star.gif>`

}

