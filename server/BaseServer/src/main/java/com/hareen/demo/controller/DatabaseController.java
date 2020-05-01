package com.hareen.demo.controller;

import com.hareen.demo.TrailApplication;
import com.hareen.demo.models.DemandForecast;
import com.hareen.demo.models.Prediction;
import com.mongodb.*;
import com.mongodb.MongoClient;
import com.mongodb.client.*;
import org.bson.Document;
import org.springframework.boot.SpringApplication;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.math.BigDecimal;
import java.util.ArrayList;


public class DatabaseController {
    public static BigDecimal predict() throws Exception{
        train();
        ArrayList<BigDecimal> model = getModel();
        MongoClientURI url = new MongoClientURI("mongodb+srv://admin:admin@cluster0-1er6h.mongodb.net/estatic?retryWrites=true&w=majority");
        MongoClient client = new MongoClient(url);
        DB db = client.getDB("estatic");
        DBCollection coll = db.getCollection("demand_forecast");
        DBCursor cursor = coll.find();
        String s = null;
        while(cursor.hasNext()){
            s = cursor.next().toString();
        }
        String[] str = s.split(",");
        BigDecimal population = new BigDecimal(str[2].substring(16,str[2].length()-1));
        BigDecimal agriculture = new BigDecimal(str[3].substring(21,str[3].length()-1));
        BigDecimal gdpPerCapita = new BigDecimal(str[4].substring(20,str[4].length()-1));
        BigDecimal DomesticConsumerAcc = new BigDecimal(str[5].substring(31,str[5].length()-1));
        BigDecimal service = new BigDecimal(str[9].substring(17,str[9].length()-2));
        BigDecimal sales = null;
        for(int i =0;i<20;i++){
            population = population.add(model.get(0));
            gdpPerCapita = gdpPerCapita.add(model.get(1));
            DomesticConsumerAcc = DomesticConsumerAcc.add(model.get(2));
            agriculture = agriculture.add(model.get(3));
            service = service.add(model.get(4));
            sales = model.get(5).add(population.multiply(model.get(6))).add(gdpPerCapita.multiply(model.get(7))).add(DomesticConsumerAcc.multiply(model.get(8))).add(agriculture.multiply(model.get(9))).add(service.multiply(model.get(10)));
            System.out.println(sales);
        }
        return sales;
    }

    public static BigDecimal predict50() throws Exception{
        train();
        ArrayList<BigDecimal> model = getModel();
        MongoClientURI url = new MongoClientURI("mongodb+srv://admin:admin@cluster0-1er6h.mongodb.net/estatic?retryWrites=true&w=majority");
        MongoClient client = new MongoClient(url);
        DB db = client.getDB("estatic");
        DBCollection coll = db.getCollection("demand_forecast");
        DBCursor cursor = coll.find();
        String s = null;
        while(cursor.hasNext()){
            s = cursor.next().toString();
        }
        String[] str = s.split(",");
        BigDecimal population = new BigDecimal(str[2].substring(16,str[2].length()-1));
        BigDecimal agriculture = new BigDecimal(str[3].substring(21,str[3].length()-1));
        BigDecimal gdpPerCapita = new BigDecimal(str[4].substring(20,str[4].length()-1));
        BigDecimal DomesticConsumerAcc = new BigDecimal(str[5].substring(31,str[5].length()-1));
        BigDecimal service = new BigDecimal(str[9].substring(17,str[9].length()-2));
        BigDecimal sales = null;
        for(int i =0;i<50;i++){
            population = population.add(model.get(0));
            gdpPerCapita = gdpPerCapita.add(model.get(1));
            DomesticConsumerAcc = DomesticConsumerAcc.add(model.get(2));
            agriculture = agriculture.add(model.get(3));
            service = service.add(model.get(4));
            sales = model.get(5).add(population.multiply(model.get(6))).add(gdpPerCapita.multiply(model.get(7))).add(DomesticConsumerAcc.multiply(model.get(8))).add(agriculture.multiply(model.get(9))).add(service.multiply(model.get(10)));
            System.out.println(sales);
        }
        return sales;
    }

    public static ArrayList<BigDecimal> getModel() throws Exception{
        ArrayList<BigDecimal> model = new ArrayList<BigDecimal>();
        File file = new File("../../data_science/Model.txt");
        BufferedReader br = new BufferedReader(new FileReader(file));
        String st;
        while ((st = br.readLine()) != null) {
            BigDecimal x = new BigDecimal(st);
            model.add(x);
        }
        return model;
    }

    public static void train() throws Exception{
        Runtime.getRuntime().exec("cmd /c start cmd.exe /K \"cd ../../data_science && python predict.py\"");
    }

}
