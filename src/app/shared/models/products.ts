import { UrlSerializer } from "@angular/router";
import { Observable } from "rxjs";

export class Products {
    $key!: string;
    id!: string;
    name!: string;
    tipo!: string;
    price!: number;
    quantity!: number;
    description!: string;
    image!: Observable<any>;
    units!: String;
}
