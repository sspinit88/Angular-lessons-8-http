import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class CarsHttpService {

    // private http - переменная, с помощью которой будем работать с сервисом и сервером

    constructor(private  http: HttpClient) {
    }

    // метод, позволяющий получать параметры с сервера
    getCars() {
        // пишим адрес запроса
        this.http.get('localhost:3000/cars');
    }
}