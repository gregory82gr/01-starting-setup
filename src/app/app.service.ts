import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AppService{
  activatedSubject =new Subject<number>();
}
