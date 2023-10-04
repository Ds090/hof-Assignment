// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.


function filterAndCapitalizeBooks(books) {
     return books
         .filter(book => book.publication_year >= 2010)
         .map(book => ({
             title: book.title,
             author: book.author.charAt(0).toUpperCase() + book.author.slice(1), // Capitalize the author's name
             publication_year: book.publication_year
         }));
 }
 
 // Example list of books
 const books = [
     { title: 'Book 1', author: 'Author A', publication_year: 2008 },
     { title: 'Book 2', author: 'Author B', publication_year: 2015 },
     { title: 'Book 3', author: 'Author C', publication_year: 2009 },
     { title: 'Book 4', author: 'Author D', publication_year: 2011 }
 ];
 
 const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
 
 // Print the filtered and capitalized books
 filteredAndCapitalizedBooks.forEach(book => {
     console.log(`Title: ${book.title}, Author: ${book.author}, Publication Year: ${book.publication_year}`);
 });
 