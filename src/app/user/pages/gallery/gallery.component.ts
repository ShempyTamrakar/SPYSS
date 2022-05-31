import { HttpClient, HttpEventType} from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, VERSION, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() {  
 
  }

  ngOnInit() {
  }
  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;
  div5:boolean=false;
  div6:boolean=false;
  div7:boolean=false;
  div8:boolean=false;
  uploadImage:boolean=false;
  public buttonName: any = true;
  div1Function(){
    console.log("print true div1")
      this.div1=!this.div1;
      if (this.div1){
        this.buttonName = !this.buttonName;

      } 

    else{
      this.buttonName = null;
    } 

  }

  div2Function(){
    console.log("print true div2")
    this.div2=!this.div2;
    if (this.div2){
      this.buttonName = !this.buttonName;

    } 

  else{
    this.buttonName = null;
  } 

  }
  div3Function(){
    console.log("print true div3")
    this.div3=!this.div3;
    if (this.div3){
      this.buttonName = !this.buttonName;

    } 

  else{
    this.buttonName = null;
  } 

  }

  div4Function(){
    console.log("print true div4")
    this.div4=!this.div4;
    if (this.div4){
      this.buttonName = !this.buttonName;

    } 
  else{
    this.buttonName = null;
  } 
  }

  div5Function(){
    console.log("print true div5")
      this.div5=!this.div5;
      if (this.div5){
        this.buttonName = !this.buttonName;

      } 

    else{
      this.buttonName = null;
    } 

  }

  div6Function(){
    console.log("print true div6")
    this.div6=!this.div6;
    if (this.div6){
      this.buttonName = !this.buttonName;

    } 

  else{
    this.buttonName = null;
  } 

  }

  div7Function(){
    console.log("print true div7")
    this.div7=!this.div7;
    if (this.div7){
      this.buttonName = !this.buttonName;

    } 

  else{
    this.buttonName = null;
  } 

  }

  div8Function(){
    console.log("print true div8")
    this.div8=!this.div8;
    if (this.div8){
      this.buttonName = !this.buttonName;

    } 
  else{
    this.buttonName = null;
  } 
  }

  div9Function(){
    this.uploadImage = !this.uploadImage;
     if (this.uploadImage){
      console.log("print true uploadImage")
    
    } 
  else{
    console.log("null")  
    this.buttonName = null;
  } 
  }


  name = 'Angular ' + VERSION.major;
  dataimage:any;

   @ViewChild('fileInput',{static:true }) fileInput: ElementRef;
  fileAttr = 'Upload Image';


  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name ;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Upload Image';
    }
  }

 }
  

