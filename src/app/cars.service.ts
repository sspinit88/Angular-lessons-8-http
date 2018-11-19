import {Injectable} from '@angular/core';
import {Http} from '@angular/core';

@Injectable()

export class CarsService {

    // private http - переменная, с помощью которой будем работать с сервисом и сервером

    constructor(private http: Http) {

    }
}