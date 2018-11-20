import {Injectable, Output, EventEmitter} from '@angular/core';
// import {HttpClient} from '@angular/common/http';


@Injectable()


export class CarsService {

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    cars: any[];

    cars = [

        {
            'name': 'Ford',
            'color': 'white',
            'id': 1
        }

    ];

    constructor() {
    }

    getCars() {
        return this.cars;
    }

    setCar(value) {
        this.cars = value;
    }
}