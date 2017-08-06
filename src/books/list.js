import {BookService} from 'services/book-service';

export class List{
    static inject(){
        return [BookService];
    }

    constructor(bookService){
        this.bookService = bookService;
    }

    activate(){
        return this.bookService.searchByName('test')
            .then(searchResult => {
                this.result = searchResult;
                console.log(this.result);
                console.log(this.result.items);
            });
    }
}