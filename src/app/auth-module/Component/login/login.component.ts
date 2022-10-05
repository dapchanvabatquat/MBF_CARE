import { Component, OnInit } from '@angular/core';
import { OrgInfo, UserLogin } from '../../../Model/User';
import { AccountService } from '../../../Service/Account/account.service';
import { Router } from '@angular/router';
import { ToastrcustomService } from '../../../Interceptor/toastrcustom'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadding: boolean = false;

  User: UserLogin = {
    MaDonVi: '',
    TaiKhoan: '',
    MatKhau: '',
    HoVaTen: ''
  }

  Org: OrgInfo = {
    username: '',
    password: '123456',
  }

  isLoading: boolean = false;
  constructor(
    private share: AccountService,
    private router: Router,
    private toatr: ToastrcustomService) {
    this.User.MaDonVi = localStorage.getItem("MaDonVi");
    this.Org.username = this.User.MaDonVi;
    this.User.TaiKhoan = localStorage.getItem("TaiKhoan");
    this.User.MatKhau = localStorage.getItem("MatKhau");
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.loadding = true;

    let result = this.share.getToken(this.Org);

    if (result != null) {

      if (result != null && result != undefined) {

        result.subscribe(rs => {
          localStorage.setItem("Token", rs.access_token)

          this.User.MaDonVi = this.Org.username;

          this.share.Login(this.User, rs.access_token).subscribe(response => {

            this.loadding = false;

            if (response.TrangThai == "OK") {
              if (this.User.MaDonVi != null && this.User.TaiKhoan != null && this.User.MatKhau != null) {
                localStorage.setItem("MaDonVi", this.User.MaDonVi);
                localStorage.setItem("TaiKhoan", this.User.TaiKhoan);
                localStorage.setItem("MatKhau", this.User.MatKhau);
              }
              this.router.navigate(['/Home']);
            }
            else {
              this.toatr.showError(response.message)
            }
          })

        })

      }

    }

  }

}
