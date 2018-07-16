import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap';
import { UploadService } from '../../core/services/upload.service'
import { NotificationService } from '../../core/services/notification.service';
import { MessageConstants } from '../../core/common/message.constants';
import { SystemConstants } from '../../core/common/system.constants';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
declare var moment: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditUserModal') public addEditUserModal: ModalDirective;
  @ViewChild('avatar') avatar;
  public pageIndex: number = 1;
  public pageSize: number = 10;
  public pageDisplay: number = 10;
  public totalRow: number;
  public filter: string = '';
  public users: any[];
  public entity: any;
  public myRoles: string[] = [];
  public allRoles: IMultiSelectOption[] = [];
  public roles: any[];
  public baseFolder:string = SystemConstants.BASE_API;

  public dateOptions: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };

  constructor(private _dataService: DataService,
    private _notificationService: NotificationService,
    private _uploadService: UploadService) { }

  ngOnInit() {
    this.loadRoles();
    this.loadData();
  }
  loadData() {
    this._dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((response: any) => {
        this.users = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRow = response.TotalRows;
      });
  }
  loadRoles() {
    this._dataService.get('/api/appRole/getlistall').subscribe((response: any[]) => {
      this.allRoles = [];
      for (let role of response) {
        this.allRoles.push({ id: role.Name, name: role.Description });
      }
    }, error => this._dataService.handleError(error));
  }
  loadUserDetail(id: any) {
    this._dataService.get('/api/appUser/detail/' + id)
      .subscribe((response: any) => {
        this.entity = response;
        this.myRoles = [];
        for (let role of this.entity.Roles) {
          this.myRoles.push(role);
        }
        this.entity.BirthDay = moment(new Date(this.entity.BirthDay)).format('DD/MM/YYYY');
      });
  }
  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.loadData();
  }
  showAddModal(): void {
    this.entity = {};
    this.addEditUserModal.show();
  }
  showEditModal(id: any): void {
    this.loadUserDetail(id);
    this.addEditUserModal.show();
  }
  saveChange(valid: boolean) {
    debugger;
    if (valid) {
      this.entity.Roles = this.myRoles;
      let file = this.avatar.nativeElement;
      if (file.files.length > 0) {
        this._uploadService.postWithFile('/api/upload/saveImage', null, file.files)
          .then((imageUrl: string) => {
            this.entity.Avatr = imageUrl;
          }).then(() => {
            this.saveData();
          })
      }
      else {
        this.saveData();
      }

    }
  }
  saveData() {
    if (this.entity.Id == undefined) {
      this._dataService.post('/api/appUser/add', JSON.stringify(this.entity))
        .subscribe((response: any) => {
          this.loadData();
          this.addEditUserModal.hide();
          this._notificationService.printSuccessMessage(MessageConstants.CREATED_OK_MSG);
        }, error => this._dataService.handleError(error));
    }
    else {
      this._dataService.put('/api/appUser/update', JSON.stringify(this.entity))
        .subscribe((response: any) => {
          this.loadData();
          this.addEditUserModal.hide();
          this._notificationService.printSuccessMessage(MessageConstants.UPDATED_OK_MSG);
        }, error => this._dataService.handleError(error));
    }
  }
  deleteItem(id: any) {
    this._notificationService.printConfirmationDialog(MessageConstants.CONFIRM_DELETE_MSG, () => this.deleteItemConfirm(id));
  }
  deleteItemConfirm(id: any) {
    this._dataService.delete('/api/appUser/delete', 'id', id).subscribe((response: Response) => {
      this._notificationService.printSuccessMessage(MessageConstants.DELETED_OK_MSG);
      this.loadData();
    });
  }
  public selectGender(event) {
    this.entity.Gender = event.target.value
  }
  public selectedDate(value: any) {
    this.entity.BirthDay = moment(value.end._d).format('DD/MM/YYYY');
  }
}
