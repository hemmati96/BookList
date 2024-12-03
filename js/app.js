let $=document
const inputTitle=$.getElementById('title')
const inputAuthor=$.getElementById('author')
const inputYear=$.getElementById('year')
const tableBody=$.getElementById('book-list')
const inputBtn=$.querySelector('.add-btn')
let books=[]


inputBtn.addEventListener('click',function(event){
    event.preventDefault()
    
        let    titleInputValue=inputTitle.value
        let    authorInputValue=inputAuthor.value
        let    yearInputValue=inputYear.value

        
           
            if(inputTitle.value==="" || inputAuthor.value==="" || inputYear.value===""){
                alert('لطفا همه اینپوت هارو به درستی وارد نمایید')

            }else{
                let newBookObj={
                    id:books.length+1,
                    title:titleInputValue,
                    autor:authorInputValue,
                    year:yearInputValue
                }
                books.push(newBookObj)
                setIntoLocalStorage(books)

            }
            inputTitle.value=''
            inputAuthor.value=''
            inputYear.value=''
            
})

function booksGenerator(allBooksArray){
    tableBody.innerHTML=''
    allBooksArray.forEach(function(book) {
      let newTrBookElem=$.createElement('tr')
      let newThTitle=$.createElement('th')
      newThTitle.innerHTML=book.title
      let newThAutor=$.createElement('th')
      newThAutor.innerHTML=book.autor
      let newThYear=$.createElement('th')
      newThYear.innerHTML=book.year
      newTrBookElem.append(newThTitle,newThAutor,newThYear)
      tableBody.append(newTrBookElem)
        console.log(tableBody)

    });

}

function setIntoLocalStorage(allBooksArray){
    localStorage.setItem('books',JSON.stringify(allBooksArray))
    booksGenerator(allBooksArray)
}

function getBooksFromLocaStorage(){
    let localStorageBooks=localStorage.getItem('books')
    if(localStorageBooks){
        books=JSON.parse(localStorageBooks)
        booksGenerator(books)
    }

}
 window.addEventListener('load',getBooksFromLocaStorage)