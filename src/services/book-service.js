import {HttpClient} from 'aurelia-http-client';

export class BookService{
    static inject(){
        return [HttpClient]
    }
    constructor(httpClient){
        this.httpClient = httpClient;
    }

    searchByName(name){
        return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes')
        .then(response => JSON.parse(response.response));
    }
}