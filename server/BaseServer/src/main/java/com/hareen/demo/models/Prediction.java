package com.hareen.demo.models;

public class Prediction {
    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Prediction{" +
                "value='" + value + '\'' +
                '}';
    }
}
