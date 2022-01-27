import { UrlSerializer } from "@angular/router";
import { Observable } from "rxjs";

export interface Products {
    Id?: string;
    name: string;
    tipo: string;
    price: number;
    quantity: number;
    description: string;
    imageProduct: any[];
    units: String;
}
