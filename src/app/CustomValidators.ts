import { FormControl } from '@angular/forms';
export class CustomValidators{
    static invalidProjectName(projectName : FormControl) : {[s : string] : boolean} {
        if(projectName.value === 'test'){
            return {'invalidProjectName' : true}
        }
        return null;
    }
}