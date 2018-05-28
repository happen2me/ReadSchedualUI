/**api链接 */
const apiUrl = "https://bwg.nyanko.website/v2/book/";
//
module.exports = { 
    getBookById: apiUrl,
    searchBook: apiUrl + "search",
    getBookList: apiUrl + "series/:id/books" }