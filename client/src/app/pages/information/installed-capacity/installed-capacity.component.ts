import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installed-capacity',
  templateUrl: './installed-capacity.component.html',
  styleUrls: ['./installed-capacity.component.scss']
})
export class InstalledCapacityComponent {
  public infoTitle2 = "";
  public infoTitle3 = "";

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



displayBlock2(){

  var toggle = document.getElementById("block2");
  this.infoTitle2 = "The total Installed Capacity Of CEB";
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }
    
  this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>";

  for(var i = 0;i<this.CEBinstalledCapacity.length;i++){
    if(i!=0){
      this.pass += "<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][0]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][1]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][2]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][3]+
      "</td></tr>";
    }else{
      this.pass += "<tr><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][0]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][1]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][2]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][3]+
      "</th></tr>";
    }
  }
  
  this.pass+="</table>"
  document.getElementById("table2").innerHTML = this.pass;
}





displayBlock3(){

  var toggle = document.getElementById("block3");
  this.infoTitle3 = "The total Installed Capacity Of Private";
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }

  this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>";

  for(var i = 0;i<this.PinstalledCapacity.length;i++){
    if(i!=0){
      this.pass += "<tr><td>"+this.PinstalledCapacity[i][0]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.PinstalledCapacity[i][1]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.PinstalledCapacity[i][2]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.PinstalledCapacity[i][3]+
      "</td></tr>";
    }else{
      this.pass += "<tr><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][0]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][1]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][2]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][3]+
      "</th></tr>";
    }
  }

  
  this.pass+="</table>"
  document.getElementById("table3").innerHTML = this.pass;
}







}
