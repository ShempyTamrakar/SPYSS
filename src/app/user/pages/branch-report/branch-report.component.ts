import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as html2pdf from 'html2pdf.js'
import { Data } from 'src/data/data';
import * as XLSX from 'xlsx';
import { RestService } from '../../services/rest.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-branch-report',
  templateUrl: './branch-report.component.html',
  styleUrls: ['./branch-report.component.css']
})

export class BranchReportComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';

  use_restService: Data[]=[];
  use_restService1: Data[]=[];
  use_restService2: Data[]=[];
  use_restService3: Data[]=[];
  use_restService4: Data[]=[];


  
  users: any;
  filteredUsers: any;
  filterBy;
  filterBy1;
  filterBy2;
  filterBy3;


  constructor(private _liveAnnouncer: LiveAnnouncer,public _restService:RestService
    ,private http:HttpClient){
      
    
    }

 
//  Sort for Branch Panel1st
  @ViewChild(MatSort,{ static:true}) sort1: MatSort;
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['branchName','branchAddress','upValaya','mobile','valaya','city','district','state','country','wing','all'];
 
  //  Sort for Branch Panel2nd
  @ViewChild('table2',{read:MatSort, static:true}) sort2: MatSort;
  listData1:MatTableDataSource<any>;
  displayedColumns1:string[]=['branchName','branchAddress','startDate','upValaya','mobile','valaya','city','district','state','country','wing','all'];
 
  //  Sort for Branch Panel3rd
  @ViewChild('table3',{read:MatSort, static:true}) sort3: MatSort;
  listData2:MatTableDataSource<any>;
  displayedColumns2:string[]=['branchName','branchAddress','upValaya','valaya','mobile','status','city','district','state','country','wing','all'];
  
  //  Sort for Branch Panel4th
  @ViewChild('table4',{read:MatSort, static:true}) sort4: MatSort;
  listData3:MatTableDataSource<any>;
  displayedColumns3:string[]=['wingName','numberOfBatches','totalMen','totalWomen','totalYogabandhu','status','valaya','city','district','state','country'];
 
  //  Sort for Branch Panel5th
  @ViewChild('table5',{read:MatSort, static:true}) sort5: MatSort;
  listData4:MatTableDataSource<any>;
  displayedColumns4:string[]=['branchName','timings','branchAddress','city','status','mobile','valaya','district','state','country'];
 
  public filteredList1 = this.displayedColumns.slice();
  
  ngOnInit() {

  
    //branch panel1
   this._restService.getBranchRepo1().subscribe((response) =>{
     this.use_restService=response;
     console.log(this.use_restService);
     this.listData=new MatTableDataSource(this.use_restService)
     this.listData.sort =this.sort1;

   },(error)=>{
     console.log("Error Occured : " + error);
   }); 
   
  
   //branchpanel2
   this._restService.getBranchRepo2().subscribe((response) =>{
    this.use_restService1=response;
    console.log(this.use_restService1);
    this.listData1=new MatTableDataSource(this.use_restService1)
    this.listData1.sort =this.sort2;
  },(error)=>{
    console.log("Error Occured : " + error);
  });

   //branchpanel3
   this._restService.getBranchRepo3().subscribe((response) =>{
    this.use_restService2=response;
    console.log(this.use_restService2);
    this.listData2=new MatTableDataSource(this.use_restService2)
    this.listData2.sort =this.sort3;
  },(error)=>{
    console.log("Error Occured : " + error);
  });

   //branchpanel4
   this._restService.getBranchRepo4().subscribe((response) =>{
    this.use_restService3=response;
    console.log(this.use_restService3);
    this.listData3=new MatTableDataSource(this.use_restService3)
    this.listData3.sort =this.sort4;
  },(error)=>{
    console.log("Error Occured : " + error);
  });
  
   //branchpanel5
   this._restService.getBranchRepo5().subscribe((response) =>{
    this.use_restService4=response;
    console.log(this.use_restService4);
    this.listData4=new MatTableDataSource(this.use_restService4)
    this.listData4.sort =this.sort5;
  },(error)=>{
    console.log("Error Occured : " + error);
  });
  }
  filter() {
    this.filteredUsers = [...this.users.filter(user => user.wingName.includes(this.filterBy))];
    this.filteredUsers = [...this.users.filter(user1 => user1.city.includes(this.filterBy1))];
    this.filteredUsers = [...this.users.filter(user2 => user2.state.includes(this.filterBy2))];
    this.filteredUsers = [...this.users.filter(user3 => user3.state.includes(this.filterBy3))];

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
