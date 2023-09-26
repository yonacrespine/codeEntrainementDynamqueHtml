
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


  
    }





function saveProduct(){
    localStorage.removeItem("productTable")
    const productTable= document.getElementById("productTable").innerHTML
    localStorage.setItem("productTable", productTable)
    
    loadProduct()
    
}

function loadProduct(){

  
    const getProduct= localStorage.getItem("productTable")
    if (getProduct ){
        document.getElementById("productTable").innerHTML= getProduct

    }
}