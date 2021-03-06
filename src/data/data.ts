import { Message } from "@angular/compiler/src/i18n/i18n_ast";


export class Data{
    branchName:string;
    valaya:string;
    mobile:number;
    branchAddress:string;
    upValaya:string;
    city:string;
    district:string;
    state:string;
    country:string;
    wing:string;
    all:number;
    startdate:Date;
    status:string;
    wingName:string;
    numberOfBatches:number;
    totalMen:number;
    totalWomen:number;
    totalYogabandhu:number;
    timings:TimeRanges;
    message:Message;
    constructor(branchName,valaya,mobile,branchAddress,upValaya,city,district,state,country,wing,all,startdate,
        status,wingName,numberOfBatches,totalMen,totalWomen,totalYogabandhu,timings,message
        ){
        this.branchName=branchName;
        this.valaya=valaya;
        this.mobile=mobile;
        this.branchAddress=branchAddress;
        this.upValaya=upValaya;
        this.city=city;
        this.district=district;
        this.state=state;
        this.country=country;
        this.wing=wing;
        this.all=all;
        this.startdate=startdate;
        this.status=status;
        this.totalYogabandhu=totalYogabandhu;
        this.totalMen=totalMen;
        this.totalWomen=totalWomen;
        this.wingName=wingName;
        this.numberOfBatches=numberOfBatches;
        this.timings=timings;
            this.message=message;
    }
}