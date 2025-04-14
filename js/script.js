// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Shem Irekpita
// Created on:Aipril 2025
// This file contains the JS functions for index.html
"use strict";
    function calculate() {
        // Get the input values
        let radius = parseFloat(document.getElementById("radius").value);

        // Calculate
        let Volume =(4/3) * radius**3 * Math.PI;

        // Display the results
        document.getElementById("Volume").innerHTML = "Volume " + Volume.toFixed(2) + "cm";
}