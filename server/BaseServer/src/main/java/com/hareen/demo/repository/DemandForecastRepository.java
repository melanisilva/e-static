package com.hareen.demo.repository;

import com.hareen.demo.models.DemandForecast;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandForecastRepository extends MongoRepository <DemandForecast,String> {

}