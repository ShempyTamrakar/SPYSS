import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import * as html2pdf from 'html2pdf.js'
import { Yoga } from 'src/data/yoga';
import * as XLSX from 'xlsx';
import { RestService } from '../../services/rest.service';
@Component({
  selector: 'app-yoga-bandhus',
  templateUrl: './yoga-bandhus.component.html',
  styleUrls: ['./yoga-bandhus.component.css']
})
export class YogaBandhusComponent implements OnInit {
  
  fileName= 'ExcelSheet.xlsx';

  users: Yoga[]=[];
  users1: Yoga[]=[];
  users2: Yoga[]=[];
  users3: Yoga[]=[];
 
  constructor(private _liveAnnouncer: LiveAnnouncer,public rs:RestService){}
//  Sort for Event Panel1st
  @ViewChild(MatSort,{ static:true}) sort1: MatSort;
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['bandhusName','bandhusAddress','valaya','mobile','city','district','state','country','wing','all'];
 
  //  Sort for Event Panel2nd
  @ViewChild('table2',{read:MatSort, static:true}) sort2: MatSort;
  listData1:MatTableDataSource<any>;
  displayedColumns1:string[]=['bandhusName','camp','bandhusAddress','valaya','mobile','jilla','pranta','aatmanusandhana','pragata','state','country','wing','all'];
 
  //  Sort for Event Panel3rd
  @ViewChild('table3',{read:MatSort, static:true}) sort3: MatSort;
  listData2:MatTableDataSource<any>;
  displayedColumns2:string[]=['bandhusName','fromDate','toDate','upValaya','bandhusAddress','mobile','city','district','state','country','wing','all'];
 
  @ViewChild('table4',{read:MatSort, static:true}) sort4: MatSort;
  listData3:MatTableDataSource<any>;
  displayedColumns3:string[]=['bandhusName','bandhusRole','bandhusAddress','valaya','mobile','city','district','state','country','wing','all'];
 
  ngOnInit() {

    //event panel1
   this.rs.getYogaRepo1().subscribe((response) =>{
     this.users=response;
     console.log(this.users);
     this.listData=new MatTableDataSource(this.users)
     this.listData.sort =this.sort1;
   },(error)=>{
     console.log("Error Occured : " + error);
   }); 
   
  
   //event panel2
   this.rs.getYogaRepo2().subscribe((response) =>{
    this.users1=response;
    console.log(this.users1);
    this.listData1=new MatTableDataSource(this.users1)
    this.listData1.sort =this.sort2;
  },(error)=>{
    console.log("Error Occured : " + error);
  });

   //event panel3
   this.rs.getYogaRepo3().subscribe((response) =>{
    this.users2=response;
    console.log(this.users2);
    this.listData2=new MatTableDataSource(this.users2)
    this.listData2.sort =this.sort3;
  },(error)=>{
    console.log("Error Occured : " + error);
  });
 //event panel4
 this.rs.getYogaRepo4().subscribe((response) =>{
  this.users3=response;
  console.log(this.users3);
  this.listData3=new MatTableDataSource(this.users3)
  this.listData3.sort =this.sort4;
},(error)=>{
  console.log("Error Occured : " + error);
})
  }

 
  
  //Pdf download method
  @ViewChild('content',{static:true}) el!: ElementRef;
 
  createPdf() {
    
    const options = {            
      name:'output.pdf',
      image:{type:'jpeg', quality: 1 },
      html2canvas:{scale: 2 },
      jsPDF:{unit:'in',orientation:'landscape',format:'Tabloid'},
    }
      const element :Element = document.getElementById('content');
    html2pdf().set(options).from(element).save()

  
  }
  
  //excel download method
  exportexcel()
  {
    /* pass here the table id */
    let element = document.getElementById('excel');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
