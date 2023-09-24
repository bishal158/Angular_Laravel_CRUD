import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private crudService:CrudServiceService,private toastr:ToastrService){}
  showStudentDelete(){
    this.toastr.warning("Student deleted")
  }
  StudentArray : any [] = [];
  ngOnInit(): void {
    this.crudService.user_show().subscribe((data:any)=>{
      this.StudentArray = data;
    });
  }
  deleteStudent(StudentId:any,index:any){

    this.StudentArray.splice(index -1, 1);
    this.crudService.user_delete(StudentId).subscribe((data:any)=>{
      this.showStudentDelete();
    });
  }

}
