import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import './login.css';

@Component({
    selector: 'edu-login',
    template: `
    <form class="edu-login">
        <div class="form-group edu-login__form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox"> Remember me
            </label>
        </div>
        <button type="submit" class="btn btn-default">Log in</button>
    </form>
    `
})
export class EduLogin {

    onSubmit() {
        console.log('Person is created')
    }

}