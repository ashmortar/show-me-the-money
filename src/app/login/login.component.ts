import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AuthService]
})

export class LoginComponent implements OnInit {

	user = {
		email: '',
		password: ''
	};

	constructor(private authService: AuthService, private router: Router) {
	}

	signInWithGoogle() {
		this.authService.signInWithGoogle()
			.then((res) => {
				this.router.navigate(['dashboard'])
			})
			.catch((err) => console.log(err));
	}

	createAccount() {
		this.authService.createAccount(this.user.email, this.user.password)
			.then((res) => {
				console.log(res);
				this.router.navigate(['dashboard']);
			})
<<<<<<< HEAD
			.catch((err) => alert(err));
=======
<<<<<<< HEAD
			.catch((err) => alert(err));
=======
>>>>>>> e3a45215220f79d192b52c17ac2d741530ec1255
>>>>>>> 24af7479babf70f20adc851b850b1ec18fa75af7
	}

	signInWithEmail() {
		this.authService.signInRegular(this.user.email, this.user.password)
			.then((res) => {
				console.log(res);

				this.router.navigate(['dashboard']);
			})
			.catch((err) => alert(err));
	}

	ngOnInit() {
	}

}
