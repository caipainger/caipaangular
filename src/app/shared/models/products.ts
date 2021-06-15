import { Byte } from "@angular/compiler/src/util";
import { Observable } from "rxjs";

export class Products {
    $key!: string;
    id!: string;
    name!: string;
    tipo!: string;
    price!: number;
    quantity!: number;
    description!: string;
    image!: Observable<String>;
    units!: String;
}
