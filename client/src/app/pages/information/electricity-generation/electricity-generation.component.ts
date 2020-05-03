import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricity-generation',
  templateUrl: './electricity-generation.component.html',
  styleUrls: ['./electricity-generation.component.scss']
})
export class ElectricityGenerationComponent  {
  public infoTitle = "";

  constructor() { }
  ngOnInit(){} 


  // used to passs in the HTML to the divs
  public pass;
  
displayBlock1(){
  //topic 
  this.infoTitle = "Electricity Generation";
  this.pass = "<p>The total Electricity Generation (Net) (CEB & PPP) during the year 2018 was 15,374 GWh with an increase of 4.8% over the previous year. The average daily generation has increased<br>"+
              "from 40.19 GWh/day in 2017 to 42.12 GWh/day in 2018. The details of Gross Generation, Auxilary Consumption are given in the pages 63-64.The CEB power stations (hydro, thermal,<br>"+
              "coal and wind) generated 11,803 GWh representing 77% of the total electricity generation. The share of power produced by the private sector decreased from 27% to 23% in the year <br>"+
              "2018.CEB hydro generation has increased by 68% from 3,059 GWh in 2017 to 5,149 GWh representing 34% of the total electricity generation in 2018, due to reception of high inflow <br>"+
              "South-West monsoon and second inter-monsoon periods. The coal power generation contributed 31% of the total electricity generation in this year. The CEB thermal (oil & coal)  <br>"+
              "generation has decreased by 980 GWh from 7,632 GWh in 2017 to 6,652 GWh representing 43% of the total electricity generation in 2018.The details of Gross Generation by power <br>"+
              "stations are given in pages 65-76, Monthly Station Consumption & Net Generation by Power Stations are given in pages 77-79 The Private Power Producers (Thermal & ORE including<br>"+
              " Mini Hydro) generated 3,571GWh representing 23% of the total electricity generation in 2018 when compared with 27% in 2017. ORE Mini Hydro power generation has increased by <br>"+
              "30% from 945 GWh in 2017 to 1,232 GWh in 2018 representing 8% of the total electricity generation. The other Renewable Energy including Wind, Solar, Dendro & Biomass power <br>"+
              "2018 and 3.5% in 2017. The total thermal (CEB and Private) generation was decreased by 17% from 10,148 GWh in 2017 to 8,392 GWh in 2018 representing 55% of the total. The total<br>"+
              "Hydro plants (Except Mini Hydro) were generated 3.9% in (CEB Hydro and ORE Mini Hydro) generation was increased by 59% from 4,004 GWh in 2017 to 6,381 GWh in 2018 representing<br>"+
              "41.5% of the total.</p>";
  //passing html to the div
  document.getElementById("para").innerHTML = this.pass;

}
displayBlock2(){
  //topic 
  this.infoTitle = "Maximum Demand";
  this.pass = "<p>The maximum night Peak Demand from the National Grid in 2018 was 2,616.1 MW. This was recorded on Tuesday, 01st May 2018. The maximum night Peak Demand in 2017<br>"+
              "was 2,523.2 MW. The system maximum day peak demand was recorded as 2,260.2 MW on Friday, 23rd March 2018. The Annual System Load Factor in 2018 was 67.1% whereas<br>"+
              "that of 2017 was 66.4%.(Calculated on Net Generation)in 2018 including Rs.M.38,731 as cost for coal. The average fuel cost per unit for CEB thermal generation <br>"+
              "including coal was Rs.11.06 for the year 2018.</p>";
  //passing html to the div
  document.getElementById("para").innerHTML = this.pass;
}
displayBlock3(){
  this.infoTitle = "System Losses ";
  this.pass = "<p>The System Losses (Excluding Auxiliary Consumption) was calculated as 8.34% in 2018 whereas System Losses in 2017 was 8.45%. This is a 0.11 decreased.The total Auxiliary<br>"+
                "Consumption in CEB power stations was 612 GWh in 2018 including 57 GWh of the Thermal Oil power station and 536 GWh of the Thermal Coal power station.</p>";

  //passing html to the div
  document.getElementById("para").innerHTML = this.pass;
}
displayBlock4(){
  //topic 
  this.infoTitle = "Electricity Sales (Billed) ";
  this.pass = "<p>The total Electricity Sales (billed) in the year 2018 was 14,091 GWh. The corresponding figure in 2017 was 13,431 GWh.  Average daily sale of electricity for the year 2018<br>"+
              "was 38.6 GWh/day.Electricity sales for the Domestic category (including Religious Purpose) has increased by 4% representing 33% of the total sales in 2018. When compare<br>"+
              "the electricity sales by consumer category, the domestic category has exceeded the industrial category from the year 2006 consecutively. Electricity sales for the Industrial<br>"+
              "category and General Purpose category in 2018 represented 31% and 21% of the total sales respectively. The electricity sales for LECO has increased by 3% representing <br>"+
              "12% of the total sales.The total number of consumer accounts (billed) in CEB in 2018 has increased by 161,150 accounts from 6,193,131 in 2017 to 6,354,281 in 2018 showing <br>"+
              "annual growth of 3%. Monthly average number of new consumer accounts added to the total consumer accounts in 2018 was 13,429 as against 19,078 in the previous year. <br>"+
              "Average daily revenue (billed) from electricity sales in 2018 was Rs.629 Million/day. The average selling price per unit in the year 2018 was 16.29 Rs. /kWh.In the year 2018 the <br>"+
              "Commercial Sector (General purposes & Hotels) represented the highest percentage (33%) of the total revenue. The percentage share of Domestic category and Industrial<br>"+
              "category was 27.0% and 27.5% respectively.</p>";
  //passing html to the div
  document.getElementById("para").innerHTML = this.pass;  
}

  displayBlock5(){
    //topic 
    this.infoTitle = "Fuel Consumption & Fuel Cost ";
    this.pass = "<p>The fuel consumption for the CEB thermal (Oil) generation was decreased by 30% from 695 M.Litres in 2017 to 485 M. Litres in 2018. The coal power station used 2,009 M.kg<br>"+
                "of coal for electricity generation in 2018. The total fuel cost for CEB thermal generation has decreased by 15% from Rs.M. 94,317 in 2017 to Rs.M. 80,133 Number of consumer<br>"+
                "accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018 representing 88% of the total consumer <br>"+
                "accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was approximately 69 kWh/month for the year 2018.<br>"+
                "Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018 representing 88%<br>"+
                "of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was approximately 69 kWh/month<br>"+
                "for the year 2018.Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 in 2017 to 5,582,559 in 2018<br>"+
                "representing 88% of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including Religious Purpose) was <br>"+
                "approximately 69 kWh/month for the year 2018.Number of consumer accounts in Domestic category (including Religious Purposes) has increased by 119,500 from 5,463,059 <br>"+
                "in 2017 to 5,582,559 in 2018 representing 88% of the total consumer accounts in the CEB. Average monthly unit consumption per consumer in Domestic category (including<br>"+
                " Religious Purpose) was approximately 69 kWh/month for the year 2018.Number of consumer accounts in Industrial category represented 1.0% of the total number of consumer<br>"+
                "accounts in 2018. Average monthly electricity consumption per consumer in Industrial category in CEB was 5,714 kWh/month. Number of consumer accounts in General Purpose<br>"+
                "in 2018.According to the tariff rates prevailed during the year, the total revenue (billed) from electricity sales has increased by 5% from Rs. 218,450 Million in 2017 to category<br>"+
                "represents 11% of the total number of consumer accounts Rs.229,571 Million in 2018. </p>";
    //passing html to the div
    document.getElementById("para").innerHTML = this.pass;  
  }

}
