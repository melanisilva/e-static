import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})

export class InformationComponent{
  title = "Information";
  public infoTitle = " distribution division";
  public infoTitle2 = "";
  public infoTitle3 = "";
  public infoTitle4 = "";
  public infoTitle5 = "";
  public infoTitle6 = "";
  public infoTitle7 = "";
  public infoTitle8 = "";
  public para1 ="";
  public para2 ="";
  public para3 ="";
  public para4 ="";
  public para5 ="";



  public distributdiv1 = [   ["Number of CEB Distribution Areas","17/62"],
                                ["Number of Consumer Service Centres","57/221"],
                                ["Distribution Divistion 1","Anuradhapura","Vavuniya","Mannar","Mullativu","Jaffna","Kilinochchi","Puttalam","Kurunegala","Polonnaruwa"]
                            ];

  public distributdiv2 = [   ["Number of CEB Distribution Areas","22/62"],
                                ["Number of Consumer Service Centres","80/221"],
                                ["Distribution Divistion 2","Gampaha","Kandy","Matale","Nuwara Eliya","Trincomalee","Ampara","Batticaloa"]
                            ];
  public distributdiv3 = [   ["Number of CEB Distribution Areas","13/62"],
                                ["Number of Consumer Service Centres","47/221"],
                                ["Distribution Divistion 3","Ratnapura","Badulla","Moneragala","Kegalle","Colombo"]
                            ]; 
  public distributdiv4 = [   ["Number of CEB Distribution Areas","10/62"],
                                ["Number of Consumer Service Centres","37/221"],
                                ["Distribution Divistion 4","Galle","Hambantota","Matara","Kalutara"]
                            ]; 

 
            

  constructor() {}
  ngOnInit() {}

//-----------------------------------------------------------------------------------------------------------------------
  displayBlock1(){
    var toggle = document.getElementById("block1");
    if(toggle.style.display === "none"){
      toggle.style.display ="block";
    }else{
      toggle.style.display = "none";
    }
  }




  public pass;



  division1(){
    this.infoTitle = "Deviation - 1"
    this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"

      for(var i = 0;i<this.distributdiv1.length;i++){
        for(var j = 1;j<this.distributdiv1[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv1[i].length-1)+"' style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
            this.distributdiv1[i][j-1]+"</th><td  style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv1[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv1[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    document.getElementById("table1").innerHTML = this.pass;
      
  }

  division2(){
    this.infoTitle = "Deviation - 2"
    this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"


      for(var i = 0;i<this.distributdiv2.length;i++){
        for(var j = 1;j<this.distributdiv2[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv2[i].length-1)+"'  style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
            this.distributdiv2[i][j-1]+"</th><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv2[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv2[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    document.getElementById("table1").innerHTML = this.pass;
      
  }

  division3(){
    this.infoTitle = "Deviation - 3"
    this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"

    
      for(var i = 0;i<this.distributdiv3.length;i++){
        for(var j = 1;j<this.distributdiv3[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv3[i].length-1)+"'  style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
            this.distributdiv3[i][j-1]+"</th><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv3[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv3[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    document.getElementById("table1").innerHTML = this.pass;
      
  }
    division4(){
        this.infoTitle = "Deviation - 4"
        this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"


        for(var i = 0;i<this.distributdiv4.length;i++){
          for(var j = 1;j<this.distributdiv4[i].length;j++){
            if(j == 1){
              this.pass += "<tr><th rowspan='"+(this.distributdiv4[i].length-1)+"'  style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
              this.distributdiv4[i][j-1]+"</th><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv4[i][j]+"</td></tr>";
            }else{
              this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv4[i][j]+"</td></tr>";
            }
          }
    
      }
    
      this.pass+="</table>"
      document.getElementById("table1").innerHTML = this.pass;
    }


    
//-----------------------------------------------------------------------------------------------------------------------

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


displayBlock4(){
  var toggle = document.getElementById("block4");
  this.infoTitle4 = "Electricity Generation";
  this.para1 = "The total Electricity Generation (Net) (CEB & PPP) during the year 2018 was 15,374 GWh with an increase of 4.8% over the previous year. The average daily generation has increased from 40.19 GWh/day in 2017 to 42.12 GWh/day in 2018. The details of Gross Generation, Auxilary Consumption are given in the pages 63-64.The CEB power stations (hydro, thermal, coal and wind) generated 11,803 GWh representing 77% of the total electricity generation. The share of power produced by the private sector decreased from 27% to 23% in the year 2018. CEB hydro generation has increased by 68% from 3,059 GWh in 2017 to 5,149 GWh representing 34% of the total electricity generation in 2018, due to reception of high inflow South-West monsoon and second inter-monsoon periods. The coal power generation contributed 31% of the total electricity generation in this year. The CEB thermal (oil & coal) generation has decreased by 980 GWh from 7,632 GWh in 2017 to 6,652 GWh representing 43% of the total electricity generation in 2018.The details of Gross Generation by power stations are given in pages 65-76, Monthly Station Consumption & Net Generation by Power Stations are given in pages 77-79 The Private Power Producers (Thermal & ORE including Mini Hydro) generated 3,571GWh representing 23% of the total electricity generation in 2018 when compared with 27% in 2017. ORE Mini Hydro power generation has increased by 30% from 945 GWh in 2017 to 1,232 GWh in 2018 representing 8% of the total electricity generation. The other Renewable Energy including Wind, Solar, Dendro & Biomass power plants (Except Mini Hydro) were generated 3.9% in 2018 and 3.5% in 2017. The total thermal (CEB and Private) generation was decreased by 17% from 10,148 GWh in 2017 to 8,392 GWh in 2018 representing 55% of the total. The total Hydro (CEB Hydro and ORE Mini Hydro) generation was increased by 59% from 4,004 GWh in 2017 to 6,381 GWh in 2018 representing 41.5% of the total.";
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }
}
displayBlock5(){
  var toggle = document.getElementById("block5");
  this.infoTitle5 = "Maximum Demand";
  this.para2 = "The maximum night Peak Demand from the National Grid in 2018 was 2,616.1 MW. This was recorded on Tuesday, 01st May 2018. The maximum night Peak Demand in 2017 was 2,523.2 MW.  The system maximum day peak demand was recorded as 2,260.2 MW on Friday, 23rd March 2018. The Annual System Load Factor in 2018 was 67.1% whereas that of 2017 was 66.4%. (Calculated on Net Generation)in 2018 including Rs.M.38,731 as cost for coal. The average fuel cost per unit for CEB thermal generation including coal was Rs.11.06 for the year 2018.";
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }
}
displayBlock6(){
  var toggle = document.getElementById("block6");
  this.infoTitle6 = "System Losses ";
  this.para3 = "The System Losses (Excluding Auxiliary Consumption) was calculated as 8.34% in 2018 whereas System Losses in 2017 was 8.45%. This is a 0.11 decreased.The total Auxiliary Consumption in CEB power stations was 612 GWh in 2018 including 57 GWh of the Thermal Oil power station and 536 GWh of the Thermal Coal power station.";
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }
}
displayBlock7(){
  var toggle = document.getElementById("block7");
  this.infoTitle7 = "Electricity Sales (Billed) ";
  this.para4 = "The total Electricity Sales (billed) in the year 2018 was 14,091 GWh. The corresponding figure in 2017 was 13,431 GWh.  Average daily sale of electricity for the year 2018 was 38.6 GWh/day.Electricity sales for the Domestic category (including Religious Purpose) has increased by 4% representing 33% of the total sales in 2018. When compare the electricity sales by consumer category, the domestic category has exceeded the industrial category from the year 2006 consecutively. Electricity sales for the Industrial category and General Purpose category in 2018 represented 31% and 21% of the total sales respectively. The electricity sales for LECO has increased by 3% representing 12% of the total sales.The total number of consumer accounts (billed) in CEB in 2018 has increased by 161,150 accounts from 6,193,131 in 2017 to 6,354,281 in 2018 showing annual growth of 3%. Monthly average number of new consumer accounts added to the total consumer accounts in 2018 was 13,429 as against 19,078 in the previous year.Average daily revenue (billed) from electricity sales in 2018 was Rs.629 Million/day. The average selling price per unit in the year 2018 was 16.29 Rs. /kWh.In the year 2018 the Commercial Sector (General purposes & Hotels) represented the highest percentage (33%) of the total revenue. The percentage share of Domestic category and Industrial category was 27.0% and 27.5% respectively.";
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }
  }

  displayBlock8(){
    var toggle = document.getElementById("block8");
    this.infoTitle8 = "Fuel Consumption & Fuel Cost ";
    this.para5 = "The fuel consumption for the CEB thermal (Oil) generation was decreased by 30% from 695 M.Litres in 2017 to 485 M. Litres in 2018. The coal power station used 2,009 M.kg of coal for electricity generation in 2018. The total fuel cost for CEB thermal generation has decreased by 15% from Rs.M. 94,317 in 2017 to Rs.M. 80,133 Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018 representing 88% of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was approximately 69 kWh/month for the year 2018.Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018 representing 88% of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was approximately 69 kWh/month for the year 2018.Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018 representing 88% of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was approximately 69 kWh/month for the year 2018.Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018 representing 88% of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was approximately 69 kWh/month for the year 2018.Number of consumer accounts in Industrial category represented 1.0% of the total number of consumer accounts in 2018. Average monthly electricity consumption per consumer in Industrial category in CEB was 5,714 kWh/month. Number of consumer accounts in General Purpose category represents 11% of the total number of consumer accounts in 2018.According to the tariff rates prevailed during the year, the total revenue (billed) from electricity sales has increased by 5% from Rs. 218,450 Million in 2017 to Rs.229,571 Million in 2018. ";
    if(toggle.style.display === "none"){
      toggle.style.display ="block";
    }else{
      toggle.style.display = "none";
    }
    }
  
}
