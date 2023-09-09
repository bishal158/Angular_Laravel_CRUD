import { Component } from '@angular/core';
import {CrudServiceService} from '../app/services/crud-service.service'
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD APP';
}
