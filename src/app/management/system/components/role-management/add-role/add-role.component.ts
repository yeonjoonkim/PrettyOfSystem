import { RoleModalService } from 'src/app/service/system/role/role-modal/role-modal.service';
import { ToastService } from './../../../../../shared/services/toast/toast.service';
import { LanguageService } from './../../../../../shared/services/language/language.service';
import { Component, OnInit } from '@angular/core';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  public newRole: IRoleConfiguration = {
    name: '',
    description: '',
    isSystemAdmin: false,
    isAdmin: false,
    isManager: false,
    isEmployee: false,
    isReception: false,
    rate: 0,
    menuConfig: []
  };
  constructor(private language: LanguageService, private toast: ToastService, private roleModal: RoleModalService) { }

  ngOnInit() {}


  /** When the system admin toggle is changed, modify the Configuration */
  public onChangeSystemAdminAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.newRole.isSystemAdmin = true;
      this.newRole.isAdmin = false;
      this.newRole.isManager = false;
      this.newRole.isEmployee = false;
      this.newRole.isReception = false;
      this.newRole.rate = 10000;
    }
  }


  /** When the admin toggle is changed, modify the Configuration */
  public onChangeAdminAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.newRole.isSystemAdmin = false;
      this.newRole.isAdmin = true;
      this.newRole.isManager = false;
      this.newRole.isEmployee = false;
      this.newRole.isReception = false;
      this.newRole.rate = 10000;
    }
  }


  /** When the manager toggle is changed, modify the Configuration */
  public onChangeManagerAccessCtrl(newAccessCtrl: boolean){
    if(newAccessCtrl){
      this.newRole.isSystemAdmin = false;
      this.newRole.isAdmin = false;
      this.newRole.isManager = true;
      this.newRole.isEmployee = false;
      this.newRole.isReception = false;
      this.newRole.rate = 1000;
    }
  }


  /** When the reception toggle is changed, modify the Configuration */
  public onChangeReceptionAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.newRole.isSystemAdmin = false;
      this.newRole.isAdmin = false;
      this.newRole.isManager = false;
      this.newRole.isEmployee = false;
      this.newRole.isReception = true;
      this.newRole.rate = 100;
    }
  }


  /** When the employee toggle is changed, modify the Configuration */
  public onChangeEmployeeAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.newRole.isSystemAdmin = false;
      this.newRole.isAdmin = false;
      this.newRole.isManager = false;
      this.newRole.isEmployee = true;
      this.newRole.isReception = false;
      this.newRole.rate = 10;
    }
  }


  /** on click event to determine the selection of configuration and description field, then process the save method*/
  public async onClickSaveRoleConfiguration(){
    let hasSelectedConfig: boolean = this.newRole.isSystemAdmin  || this.newRole.isAdmin || this.newRole.isManager || this.newRole.isEmployee || this.newRole.isReception;
    let hasDescription: boolean = this.newRole.description.length > 0;

    if(hasDescription && hasSelectedConfig){
      //TODO
    }else{
      await this.presentErroMsg(hasDescription, hasSelectedConfig)
    }
  }


  /** During save click event, present toast error message to determine the error. */
  private async presentErroMsg(hasDescription: boolean, hasSelectedConfig: boolean): Promise<void>{
    let errormsg: string = !hasDescription    ? await this.language.transform('message.error.descriptionfield') :
                           !hasSelectedConfig ? await this.language.transform('message.error.config')
                           : '';

    await this.toast.presentError(errormsg);
  }


  /**Dismiss the current add role modal */
  public async dismiss(): Promise<void>{
    await this.roleModal.dismissModal();
  }

}
