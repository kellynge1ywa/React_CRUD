export interface Book{
    id:string,
    title:string,
    author:string,
    price:number
}

export enum showPage{
    booklist,
    addbook,
    editbook
}
// export const booksData = [
//     { id: "1", title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 15.99 },
//     { id: "2", title: "Pride and Prejudice", author: "Jane Austen", price: 10.50 },
//     { id: "3", title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.75 },
//   ];
