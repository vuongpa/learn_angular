import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions, authSelectors } from 'src/app/auth/authSlice';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  readonly currentUser$ = this.store.select(authSelectors.selectCurrentUser)
  currentUser!: IUser
  fakeNewUser: IUser = {
    _id: "jjashda112", 
    first_name: "phan", 
    last_name: "vuong", 
    email: "admin@gmail.com", 
    phone_number: "0123456789"
  }
  inputValue: string = 'my site';

  constructor(private store: Store) { }

  ngOnInit() {
    this.currentUser$.subscribe((data: any) => {
      this.currentUser = data;
    })
  }

  onSetCurrentUser(user: IUser) {
    this.store.dispatch(authActions.setCurrentUser(user))
  }
}
