package com.hareen.demo.controller;

import com.hareen.demo.models.DemandForecast;
import com.hareen.demo.models.Prediction;
import com.hareen.demo.repository.DemandForecastRepository;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoDatabase;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController // im saying this is my rest controller
@RequestMapping("/api") // the url to comeinto the controller
@CrossOrigin("*")
public class DemandForecastController {

    //the objects in instantiated when the class runs
    @Autowired
    DemandForecastRepository demandForecastRepository;


    @GetMapping("/demf")
    public List<DemandForecast> getAllForecasts() {
        Sort sortByCreatedAtDesc = Sort.by(Sort.Direction.DESC, "Year");
        return demandForecastRepository.findAll(sortByCreatedAtDesc);
    }




    @GetMapping(value="/demf/{id}")
    public ResponseEntity<DemandForecast> getForecastById(@PathVariable("id") String id) {
        return demandForecastRepository.findById(id)
                .map(demandForecast -> ResponseEntity.ok().body(demandForecast))
                .orElse(ResponseEntity.notFound().build());
    }
    @CrossOrigin("*")
    @GetMapping(value="/predict")
    public ResponseEntity<Prediction> getPrediction() throws Exception{
        Prediction p = new Prediction();
        ArrayList<BigDecimal> prediction1 = DatabaseController.predict();
        String prediction = prediction1.get(0).toString();
        String accuracy = prediction1.get(1).toString();
        p.setValue(prediction);
        p.setAccurcy(accuracy);
        return new ResponseEntity<Prediction>(p, HttpStatus.OK);
    }

    @CrossOrigin("*")
    @GetMapping(value="/predict50")
    public ResponseEntity<Prediction> getPrediction50() throws Exception{
        Prediction p = new Prediction();
        ArrayList<BigDecimal> prediction1 = DatabaseController.predict50();
        String prediction = prediction1.get(0).toString();
        String accuracy = prediction1.get(1).toString();
        p.setValue(prediction);
        p.setAccurcy(accuracy);
        return new ResponseEntity<Prediction>(p, HttpStatus.OK);
    }

//    @PutMapping(value="/demf/{id}")
//    public ResponseEntity<DemandForecast> updateForecast(@PathVariable("id") String id,
//                                                     @Valid @RequestBody DemandForecast demandForecast) {
////        return demandForecastRepository.findById(id)
////                .map(demandForecastData -> {
////                    demandForecastData.setTitle(demandForecast.getTitle());
////                    demandForecastData.setCompleted(demandForecast.getCompleted());
////                    DemandForecast updatedDemandForecast = demandForecastRepository.save(demandForecastData);
////                    return ResponseEntity.ok().body(updatedDemandForecast);
////                }).orElse(ResponseEntity.notFound().build());
//    }

 //   @DeleteMapping(value="/demf/{year}")
   // public ResponseEntity<?> deleteForecast(@PathVariable("year") String year) {
     //  return demandForecastRepository.findById(year)
       //       .map(demandForecast -> {
         //          demandForecastRepository.deleteById(year);
           //        return ResponseEntity.ok().build();
            //   }).orElse(ResponseEntity.notFound().build());
   // }

 
//
//    @RequestMapping(value = "/demf/{add}",method = RequsetMethod.POST)
//    public add add(@RequestBody add addData){
//        DemandForecast demandForecast = new DemandForecast();
//        demandForecastController.
//        return addData;
//    }


//    @PostMapping("/demf")
  //  public ResponseEntity<DemandForecast>addDemandForecast(@RequestBody DemandForecast demandForecast){
    //    try{
      //      DemandForecast _demandForecast = demandForecastRepository.save(new DemandForecast(demandForecast.getYear(),demandForecast.getPopulation(),demandForecast.getGDPAgri(),demandForecast.getDomesticConsumer(),demandForecast.getGDPPerCap(),demandForecast.getGDPService(),demandForecast.getAvgElectricity()));
        //    return new ResponseEntity<>(_demandForecast,HttpStatus.CREATED)
        //}catch(Exception e){
        //    return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
        //}
   // }


<<<<<<< HEAD
    @PutMapping("/demf/{year}")
    public ResponseEntity <DemandForecast>updatedDemandForecast(@PathVariable("year") String year,@RequestBody DemandForecast demandForecast){
        Optional<DemandForecast> demandForecastData = demandForecastRepository.findById(year);

        if(demandForecastData.isPresent()){
            DemandForecast _demandForecast = demandForecastData.get();
            _demandForecast.setPopulation(demandForecast.getPopulation());
            _demandForecast.setGDPAgri(demandForecast.getGDPAgri());
            _demandForecast.setDomesticConsumer(demandForecast.getDomesticConsumer());
            _demandForecast.setGDPPerCap(demandForecast.getGDPPerCap());
            _demandForecast.setGDPService(demandForecast.getGDPService());
            _demandForecast.setAvgElectricity(demandForecast.getAvgElectricity());
             return new ResponseEntity<>(demandForecastRepository.save(_demandForecast),HttpStatus.OK);
             }else{
                 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
             }
=======
  //  @PutMapping("/demf/{year}")
    //public ResponseEntity <DemandForecast>updatedDemandForecast(@PathVariable("year") int year,@RequestBody DemandForecast demandForecast){
      //  Optional<DemandForecast> demandForecastData = demandForecastRepository.findById(year);

        //if(demandForecastData.isPresent()){
          //  DemandForecast _demandForecast = demandForecastData.get();
            //_demandForecast.setPopulation(demandForecast.getPopulation());
            //_demandForecast.setGDPAgri(demandForecast.getGDPAgri());
            //_demandForecast.setDomesticConsumer(demandForecast.getDomesticConsumer());
            //_demandForecast.setGDPPerCap(demandForecast.getGDPPerCap());
            //_demandForecast.setGDPService(demandForecast.getGDPService());
            //_demandForecast.setAvgElectricity(demandForecast.getAvgElectricity());
            // return new ResponseEntity<>(demandForecastRepository.save(_demandForecast),HttpStatus.OK);
            // }else{
              //   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            // }
    //}


    public static boolean activityExists(MongoDatabase db, String year) {
        MongoClientURI url = new MongoClientURI("mongodb+srv://admin:admin@cluster0-1er6h.mongodb.net/estatic?retryWrites=true&w=majority");
        MongoClient client = new MongoClient(url);
        db = client.getDatabase("estatic");
        FindIterable<org.bson.Document> iterable = db.getCollection("demand_forecast").find(new Document("Year", year));
        return iterable.first() != null;
>>>>>>> ee9d96761f9e2999f55e1be40af4687c2ef3d2a9
    }
      
      @RequestMapping(value = "/demf/{year}", method = RequestMethod.DELETE)
      public boolean deleteData(@PathVariable("year") String year) {
        MongoClientURI url = new MongoClientURI("mongodb+srv://admin:admin@cluster0-1er6h.mongodb.net/estatic?retryWrites=true&w=majority");
        MongoClient client = new MongoClient(url);
        MongoDatabase db = client.getDatabase("estatic");
        if(activityExists(db, year)){
          demandForecastRepository.deleteByYear(year);
          return true;
        }
        else{
          return false;
        }
      }


}