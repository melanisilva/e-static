import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installed-capacity',
  templateUrl: './installed-capacity.component.html',
  styleUrls: ['./installed-capacity.component.scss']
})
export class InstalledCapacityComponent {
  public infoTitle = "";

  constructor() { }

  ngOnInit() {
  }

  
public pass;

public CEBinstalledCapacity = [  
["CEB Installed Capacity","2019","Percentage of Total 2019","2018"],
["Hydro","1,399","35%","1,391"],
["Thermal – Oil","604","15%","604"],
["Thermal – Coal","900","22%","900"],
["ORE - Wind","-","-","3"],
["Total - CEB","2,903","72%","2,898"]];
public PinstalledCapacity =[
["Private Installed Capacity","2019","Percentage of Total 2019","2018"],
["Thermal - Oil","533","13%","602"],
["ORE – Mini Hydro","394","10%","354"],
["ORE – Wind ","128","3%","128"],
["ORE – Other ","88","2%","77"],
["Total - PPP "," 1,143 ","28%","1,162"],
];






displayBlock1(){


  this.infoTitle = "The Total Installed Capacity Summary";
  this.pass = "<p>"+
  "The total Installed Capacity decreased by 0.3% (14 MW) when compared with 2017. The installed capacity of Major hydro power plants represented 35% of the total capacity.<br>"+
  "The other Renewable Energy (ORE) plants including Mini Hydro represent 15% (Mini Hydro – 10%, Wind, Solar, Dendro and Biomass represented 5%) as given above. The<br>"+
  "CEB power  stations represented 72% of the total installed capacity. During the year 13 mini hydropower plants & two dendro power plants were added to the system by the <br>"+
  "Private Power Producers with a total capacity of 51 MW. The 100MW IPP plant namely ACE power (Embilipitiya), which was operating under a contract period for one year <br>"+
  "since April 2017, was continued to operate with renewing the contract on April 2018 for a contract period of three years ahead. ACE Power (Matara) IPP plant which was <br>"+
  "operating under a contract period for one year was expired on 24th March 2018. The IPP plant owned by Asia Power (Pvt) Ltd with installed capacity of 51 MW retired on <br>"+
  "24th June 2018 after completion of 20 years contract period.<br><br>"+
  "Several other IPP plants were connected to national network for the purpose of short term power generation. Three plants owned by Aggreko International (Pvt)Ltd were <br>"+
  "recommissioned at Pallekelle, Galle and Hambantota GSSs on 6th April 2018, for a contract period of 6 months ending on 6th October 2018. The installed capacities of <br>"+
  "Pallekelle, Galle and Hambantota plants were 22 MW, 10 MW and 24 MW respectively.<br><br>"+
  "The installed capacity of Unit No. 2 of Polpitiya Power Station was improved from 37.5 MW to 45 MW after rehabilitation project works, making the installed capacity of<br>"+
  "the plant to 90 MW. The 3 MW CEB owned wind power plant in Hambantota was de-commissioned and dismantled on 23rd October 2018."+
  "</p>"
  document.getElementById("table").innerHTML = this.pass;
  document.getElementById("table").style.marginLeft = "100px";
}









displayBlock2(){


    
  this.pass = "<table style= 'margin-left: 10px;margin-bottom: 50px;width:99%;border-collapse: collapse;'>";

  for(var i = 0;i<this.CEBinstalledCapacity.length;i++){
    if(i!=0){
      this.pass += "<tr><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.CEBinstalledCapacity[i][0]+
      "</td><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.CEBinstalledCapacity[i][1]+
      "</td><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.CEBinstalledCapacity[i][2]+
      "</td><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.CEBinstalledCapacity[i][3]+
      "</td></tr>";
    }else{
      this.pass += "<tr><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.CEBinstalledCapacity[i][0]+
      "</th><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.CEBinstalledCapacity[i][1]+
      "</th><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.CEBinstalledCapacity[i][2]+
      "</th><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.CEBinstalledCapacity[i][3]+
      "</th></tr>";
    }
  }
  
  this.pass+="</table>"
  this.infoTitle = "The Total Installed Capacity Of CEB";
  document.getElementById("table").innerHTML = this.pass;
  document.getElementById("table").style.marginLeft = "0px";
}





displayBlock3(){

 

  this.pass = "<table style= 'margin-left: 10px;margin-bottom: 50px;width: 99%;border-collapse: collapse;'>";

  for(var i = 0;i<this.PinstalledCapacity.length;i++){
    if(i!=0){
      this.pass += "<tr><td  style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.PinstalledCapacity[i][0]+
      "</td><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.PinstalledCapacity[i][1]+
      "</td><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.PinstalledCapacity[i][2]+
      "</td><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.PinstalledCapacity[i][3]+
      "</td></tr>";
    }else{
      this.pass += "<tr><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.PinstalledCapacity[i][0]+
      "</th><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.PinstalledCapacity[i][1]+
      "</th><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.PinstalledCapacity[i][2]+
      "</th><th style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+this.PinstalledCapacity[i][3]+
      "</th></tr>";
    }
  }

  
  this.pass+="</table>"
  this.infoTitle = "The Total Installed Capacity Of Private";
  document.getElementById("table").innerHTML = this.pass;
  document.getElementById("table").style.marginLeft = "0px";
}







}
