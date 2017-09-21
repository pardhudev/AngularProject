import {NgModule} from "@angular/core"
import { EmployeeComponent } from "./emp.component";
import { EmployeeListComponent } from "./emp.list.component";
import { EmployeeAddComponent } from "./emp.add.component";
import { CommonModule } from "@angular/common";
import { EmployeeService } from "../Logics/EmployeeService";
import { ConcatPipe } from "../Pipes/concat.pipe";
import { MouseOverDirective } from "../directives/mouseover.directive";
@NgModule({
    imports:[CommonModule],
    declarations:[MouseOverDirective,ConcatPipe,EmployeeComponent,EmployeeListComponent,
        EmployeeAddComponent],
        exports:[EmployeeComponent],
        providers:[{provide:EmployeeService,
        useClass:EmployeeService}]
})
export class EmployeeModule{

}