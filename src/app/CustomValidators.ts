import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators{
    static invalidProjectName(projectName : FormControl) : {[s : string] : boolean} {
        if(projectName.value === 'test'){
            return {'invalidProjectName' : true}
        }
        return null;
    }

    static asyncInvalidProjectName(projectName : FormControl) : Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(projectName.value ==='TestProject'){
                    resolve({'invalidProjectName' : true});
                }
                resolve(null);
            } , 2500);
        });
        return promise;
    }
}