import { AfterViewInit, Component } from '@angular/core';
import { User } from 'src/app/model/user-model.model';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
})
export class ShowUsersComponent implements AfterViewInit {
  users: User[];
  constructor(private apiService: ApiUtilityService) {}
  ngAfterViewInit(): void {
    this.apiService.getAllUsers().subscribe((val) => (this.users = val));
  }
}
