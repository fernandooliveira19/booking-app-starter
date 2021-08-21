import {Observable} from "rxjs/Observable"
import 'rxjs/add/observable/throw'
import {HttpErrorResponse} from "@angular/common/http"

export class ErrorHandler{

    static handleError(error : HttpErrorResponse | any){
        let errorMessage : string
        console.log(`${error.statusEnum}`)
        if(error instanceof HttpErrorResponse){
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMessage = error.toString();
        }
        console.log(errorMessage)

        return Observable.throw(errorMessage)
    }

}