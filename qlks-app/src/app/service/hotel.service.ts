import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})
export class HotelService {
    constructor(private apiService: ApiService) {
    }

    getAllHotel(param: any): Observable<any[]> {
        return this.apiService.doPost('getAllHotel', param);
    }
}