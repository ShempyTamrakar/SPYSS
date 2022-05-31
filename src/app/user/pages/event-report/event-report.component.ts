import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Event } from 'src/data/event';
import * as html2pdf from 'html2pdf.js'
import * as XLSX from 'xlsx';
import { RestService } from '../../services/rest.service';
@Component({
  selector: 'app-event-report',
  templateUrl: './event-report.component.html',
  styleUrls: ['./event-report.component.css']
})
export class EventReportComponent implements OnInit {
 
  fileName= 'ExcelSheet.xlsx';

  users: Event[]=[];
  users1: Event[]=[];
  users2: Event[]=[];
  users3: Event[]=[];
  users4: Event[]=[];
  constructor(private _liveAnnouncer: LiveAnnouncer,public rs:RestService){}
//  Sort for Event Panel1st
  @ViewChild(MatSort,{ static:true}) sort1: MatSort;
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['eventName','date','wing','totalMen','totalWomen','totalYogabandhu','status','city','valaya','district','state','country'];
 
  //  Sort for Event Panel2nd
  @ViewChild('table2',{read:MatSort, static:true}) sort2: MatSort;
  listData1:MatTableDataSource<any>;
  displayedColumns1:string[]=['eventName','typeOfNamaskars','countOfNamaskars','upValaya','valaya','city','district','state','country'];
 
  //  Sort for Event Panel3rd
  @ViewChild('table3',{read:MatSort, static:true}) sort3: MatSort;
  listData2:MatTableDataSource<any>;
  displayedColumns2:string[]=['branchName','branchAddress','upValaya','valaya','mobile','status','city','district','state','country','wing','all'];
 
  ngOnInit() {

    //event panel1
   this.rs.getEventRepo1().subscribe((response) =>{
     this.users=response;
     console.log(this.users);
     this.listData=new MatTableDataSource(this.users)
     this.listData.sort =this.sort1;
   },(error)=>{
     console.log("Error Occured : " + error);
   }); 
   
  
   //event panel2
   this.rs.getEventRepo2().subscribe((response) =>{
    this.users1=response;
    console.log(this.users1);
    this.listData1=new MatTableDataSource(this.users1)
    this.listData1.sort =this.sort2;
  },(error)=>{
    console.log("Error Occured : " + error);
  });

   //event panel3
   this.rs.getEventRepo3().subscribe((response) =>{
    this.users2=response;
    console.log(this.users2);
    this.listData2=new MatTableDataSource(this.users2)
    this.listData2.sort =this.sort3;
  },(error)=>{
    console.log("Error Occured : " + error);
  });

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
