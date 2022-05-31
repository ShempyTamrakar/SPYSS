import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sign= this.router.url=='/signup';
  public log=this.router.url=='/login';
 
  constructor(private router: Router) { }

  ngOnInit() {
    // this.nav.show();
    // this.nav.doSomethingElseUseful();
  }
  togglelogin(){
    if(this.log=!this.log){
    console.log('hide login')
    }else {
      console.log('hide sign')
    }
      
     }
    
     toggleSignIn(){
      if(this.sign=!this.sign){
      console.log('hide sign')
      }else {
        console.log('hidelogin')
      }
        
       }
}
