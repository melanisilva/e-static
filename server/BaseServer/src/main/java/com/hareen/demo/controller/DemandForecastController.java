package com.hareen.demo.controller;

import com.hareen.demo.models.DemandForecast;
import com.hareen.demo.repository.DemandForecastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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


    @PostMapping("/demf")
    public ResponseEntity<DemandForecast>addDemandForecast(@RequestBody DemandForecast demandForecast){
        try{
            DemandForecast _demandForecast = demandForecastRepository.save(new DemandForecast(demandForecast.getYear(),demandForecast.getPopulation(),,demandForecast.getGDPAgri(),demandForecast.getGDPPerCap(),demandForecast.getDomesticConsumer(),demandForecast.getAvgElectricity(),false));
            return new ResponseEntity<>(_demandForecast,HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
        }
    }


    @PutMapping("/demf/{year}")
    public ResponseEntity <DemandForecast>updatedDemandForecast(@PathVariable("year") int year,@RequestBody DemandForecast demandForecast){
        Optional<DemandForecast> demandForecastData = demandForecastRepository.findById(String.valueOf(year));

        if(demandForecastData.isPresent()){
            DemandForecast _demandForecast = demandForecastData.get();
            _demandForecast.setPopulation(demandForecast.getPopulation());
            _demandForecast.setGDPAgri(demandForecast.getGDPAgri());
            _demandForecast.setGDPPerCap(demandForecast.getGDPPerCap());
            _demandForecast.setDomesticConsumer(demandForecast.getDomesticConsumer());
            _demandForecast.setAvgElectricity(demandForecast.getAvgElectricity());
             return new ResponseEntity<>(demandForecastRepository.save(_demandForecast),HttpStatus.OK);
             }else{
                 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
             }
    }





    @GetMapping(value="/demf/{id}")
    public ResponseEntity<DemandForecast> getForecastById(@PathVariable("id") String id) {
        return demandForecastRepository.findById(id)
                .map(demandForecast -> ResponseEntity.ok().body(demandForecast))
                .orElse(ResponseEntity.notFound().build());
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
//  }

    @DeleteMapping(value="/demf/{year}")
    public ResponseEntity<?> deleteForecast(@PathVariable("year") String year) {
        return demandForecastRepository.findById(year)
                .map(demandForecast -> {
                    demandForecastRepository.deleteById(year);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }


//    @RequestMapping(value = "/demf/{add}",method = RequsetMethod.POST)
//    public add add(@RequestBody add addData){
//        DemandForecast demandForecast = new DemandForecast();
//        demandForecastController.
//        return addData;
//    }

}