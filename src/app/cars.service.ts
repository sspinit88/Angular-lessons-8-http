import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class CarsHttpService {

    // private http - переменная, с помощью которой будем работать с сервисом и сервером

    constructor(private  http: HttpClient) {

    }
}