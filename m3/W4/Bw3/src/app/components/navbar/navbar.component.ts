import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iauthdata } from 'src/app/interfaces/iauthdata';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  };

  auth: Iauthdata = {
    email: '',
    password: '',
  };

  username: string = '';
  wrongData: boolean = false
  regEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

  constructor(
    private userSrv: UsersService,
    private authSrv: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isUserLogged())
    this.getName();
  }

  login() {
    this.authSrv.login(this.auth).subscribe((res: any) => {
      this.authSrv.logUser(res.accessToken, res.user);
      this.getName();
      this.wrongData = false
      location.reload()
    },() => {this.wrongData = true}
    );
  }

  signup() {
    this.userSrv.registerUser(this.user).subscribe((data:any) => {
      this.auth.email = this.user.email

        this.authSrv.login(this.auth).subscribe((res:any) => {
          this.authSrv.logUser(res.accessToken, res.user)
          this.getName()
          location.reload()
        })
    })
  }

  logout(){
    this.authSrv.logout()
    this.router.navigate(['/'])
    
    this.user = {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
    };

    this.auth = {
      email: '',
      password: '',
    };
  }

  getName() {
    let user: any = localStorage.getItem('user');
    this.username = JSON.parse(user).username;
  }

  isUserLogged() {
    return this.authSrv.isUserLogged();
  }

  signupCondition() {
    return this.user.name.length < 2 ||
    this.user.surname.length < 2 ||
    this.user.username.length < 2 ||
    !this.user.email.match(this.regEx) ||
    this.user.password.length < 4;
  }
}
