package com.hareen.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Document(collection = "demand_forecast")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class DemandForecast {
    @Id
    private String id;

    @Field("Year")
    private String year;
    @Field("Population")
    private String population;
    @Field("GDP Agriculture")
    private String GDPAgri;
    @Field("GDP Per Capita")
    private String GDPPerCap;
    @Field("Domestic Consumer Account")
    private String domesticConsumer;
    @Field("Average Electricity Price")
    private String avgElectricity;
    @Field("Electricity Sales")
    private String eSales;
    @Field("Electricity Classes")
    private String eClass;
    @Field("GDP Service")
    private String GDPService;

    public DemandForecast() {
    }

    public DemandForecast(String id, String year, String population, String GDPAgri, String GDPPerCap, String domesticConsumer, String avgElectricity, String eSales, String eClass, String GDPService) {
        this.id = id;
        this.year = year;
        this.population = population;
        this.GDPAgri = GDPAgri;
        this.GDPPerCap = GDPPerCap;
        this.domesticConsumer = domesticConsumer;
        this.avgElectricity = avgElectricity;
        this.eSales = eSales;
        this.eClass = eClass;
        this.GDPService = GDPService;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getPopulation() {
        return population;
    }

    public void setPopulation(String population) {
        this.population = population;
    }

    public String getGDPAgri() {
        return GDPAgri;
    }

    public void setGDPAgri(String GDPAgri) {
        this.GDPAgri = GDPAgri;
    }

    public String getGDPPerCap() {
        return GDPPerCap;
    }

    public void setGDPPerCap(String GDPPerCap) {
        this.GDPPerCap = GDPPerCap;
    }

    public String getDomesticConsumer() {
        return domesticConsumer;
    }

    public void setDomesticConsumer(String domesticConsumer) {
        this.domesticConsumer = domesticConsumer;
    }

    public String getAvgElectricity() {
        return avgElectricity;
    }

    public void setAvgElectricity(String avgElectricity) {
        this.avgElectricity = avgElectricity;
    }

    public String geteSales() {
        return eSales;
    }

    public void seteSales(String eSales) {
        this.eSales = eSales;
    }

    public String geteClass() {
        return eClass;
    }

    public void seteClass(String eClass) {
        this.eClass = eClass;
    }

    public String getGDPService() {
        return GDPService;
    }

    public void setGDPService(String GDPService) {
        this.GDPService = GDPService;
    }

    @Override
    public String toString() {
        return "DemandForecast{" +
                "id='" + id + '\'' +
                ", year='" + year + '\'' +
                ", population='" + population + '\'' +
                ", GDPAgri='" + GDPAgri + '\'' +
                ", GDPPerCap='" + GDPPerCap + '\'' +
                ", domesticConsumer='" + domesticConsumer + '\'' +
                ", avgElectricity='" + avgElectricity + '\'' +
                ", eSales='" + eSales + '\'' +
                ", eClass='" + eClass + '\'' +
                ", GDPService='" + GDPService + '\'' +
                '}';
    }


   
}
