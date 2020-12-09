import { LoginService } from './shared/login.service';
import { Component, OnInit } from '@angular/core';
import { login } from './model/login';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'application';
  url1="https://leblogdemonsieur.com/wp-content/uploads/2019/11/layering-homme-hiver-2019.jpg"
  url2="https://fivmagazine.fr/wp-content/uploads/2015/02/beitragsbild-m%C3%A4nner-mode-stylisch-outfit-fashion-design-business-look-2.jpg"
  url3="https://img.giglio.com/images/myStyle/Fall:Winter%202019-2020%20mens%20fashion%20trends_301.jpg"
  msg1:string="";
  msg2:string="";
  msgSucces='';
  log:login =new login();
  isSignedIn=false;
  signedIn=true;
  inSignin=false;
  inSignup=false;
  inSignup1=false;
  pause=false;
  pause1=false;
  constructor(private auth:LoginService,private route:Router){}
  ngOnInit(){
    /*if(localStorage.getItem('user')!==null)
      this.isSignedIn=true; 
    else
    this.isSignedIn=false;
    */
  }
  
  async signUp(i:string,e:string){
    this.pause1=true;
    await this.auth.signup(i,e).then(res=>{
      //if(this.auth.isLoggedIn)
      
       let p=new Promise((r,v)=>{
         setTimeout(()=>{},10000)
       })
      this.inSignup1=true;
      this.signedIn=true;
      this.pause1=false;
      this.msg1=''
      this.msgSucces="Well done !! You successfully"
      this.inSignup=false;
     
    }).catch(err=>{
      this.inSignup=true;
      this.pause1=false;
      this.inSignup1=false;
      this.msgSucces=''
      this.msg1=err.message;
    })
    
  }
  async signin(i:string,e:string){
    this.pause=true;
     await this.auth.signin(i,e).then(rs=>{
       let p=new Promise((r,v)=>{
         setTimeout(()=>{},10000)
       })
      if(this.auth.isLoggedIn)
      this.isSignedIn=true;
      this.signedIn=false;
      this.route.navigateByUrl('/stock')
      this.pause=false;
     })
     .catch(err=>{
      let p1=new Promise((r,v)=>{
        setTimeout(()=>{},10000)
      })
      this.inSignin=true;
      this.pause=false;
      this.msg2=err.message;
         
     })
     
  }
  async logout(){
    this.auth.logout();
    this.msgSucces=""
    this.route.navigateByUrl("/");
    this.isSignedIn=false;
    this.signedIn=true;
    this.inSignin=false;
    this.inSignup=false;
  }

}
