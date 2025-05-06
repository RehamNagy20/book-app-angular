import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "@angular/fire/auth";

interface AuthResponseData {
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
}

@Injectable({providedIn:'root'})
export class AuthService {
    constructor(private http:HttpClient) { }
    auth = getAuth();
    signUp(email:string, password:string) {
        return createUserWithEmailAndPassword(this.auth, email, password)
        .then(userCredential => console.log(userCredential.user))
        .catch(error => console.error(error));
}

    signIn(email:string, password:string) {
        return signInWithEmailAndPassword(this.auth, email, password)
        .then(userCredential => console.log(userCredential.user))
        .catch(error => console.error(error));
    }

}
