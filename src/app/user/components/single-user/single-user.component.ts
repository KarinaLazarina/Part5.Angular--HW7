import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    activatedRoute.params.subscribe(value =>
      userService.getUser(value.id).subscribe(data => this.user = data)
    );
  }

  ngOnInit(): void {
  }

}
