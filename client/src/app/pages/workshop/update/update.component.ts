import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {


  // error massages
  public mainError = '<p style= "color: red;">an error has occored</p>';
  public error = '<p style= "color: red;">an error has occored</p>';

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }


  errorControl(){
    var updatePopulation = document.getElementById("updatePopulation");
    var updateGDP1 = document.getElementById("updateGDP1");
    var updateDom = document.getElementById("updateDom");
    var updateGDP2 = document.getElementById("updateGDP2");
    var updateGDP3 = document.getElementById("updateGDP3");
    var updateAvg = updateAvg.getElementById("addAvg");


    if(typeof(updatePopulation) == 'number'){

       if(typeof(updateGDP1) == 'number'){

        if(typeof(updateDom) == 'number'){

          if(typeof(updateGDP2) == 'number'){

            if(typeof(updateGDP3) == 'number'){

              if(typeof(updateAvg) == 'number'){
                return true;


                }else{
                  document.getElementById("error6").innerHTML = this.error;
                  return false;
                }



              }else{
                document.getElementById("error5").innerHTML = this.error;
                return false;
              }



            }else{
              document.getElementById("error4").innerHTML = this.error;
              return false;
            }



          }else{
            document.getElementById("error3").innerHTML = this.error;
            return false;
          }

        }else{
          document.getElementById("error2").innerHTML = this.error;
          return false;
        }


    }else{
      document.getElementById("error1").innerHTML = this.error;
      return false;
    }
  }










  passUpdate(){
      if(this.errorControl){

        let year = (<HTMLInputElement>document.getElementById('year')).value;
        let updatePopulation = (<HTMLInputElement>document.getElementById('updatePopulation')).value;
        let updateGDP1 = (<HTMLInputElement>document.getElementById('updateGDP1')).value;
        let updateDom = (<HTMLInputElement>document.getElementById('updateDom')).value;
        let updateGDP2 = (<HTMLInputElement>document.getElementById('updateGDP2')).value;
        let updateGDP3 = (<HTMLInputElement>document.getElementById('updateGDP3')).value;
        let updateAvg = (<HTMLInputElement>document.getElementById('updateAvg')).value;

        var updating ={
          year:year,
          updatePopulation:updatePopulation,
          updateGDP1:updateGDP1,
          updateDom:updateDom,
          updateGDP2:updateGDP2,
          updateGDP3:updateGDP3,
          updateAvg:updateAvg
        };

        this.service.updateData(year,updating).subscribe(
           (data)=>{
            console.log(data);
         }
        )
      }else{

        document.getElementById("Mainerror").innerHTML = this.mainError;

      }

  }

}
