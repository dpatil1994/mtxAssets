import { LightningElement } from 'lwc';

export default class DateTimeGeneratorForCalendar extends LightningElement {





    generateArrayOfTime() {

        let minuteInterval = 60;                                                                 //minutes interval
        var arrayOfTime = [];                                                                   // time array
        var tempTime = 0;                                                                       // start time
        var amPmValueArray = ['AM', 'PM'];                                                      // AM-PM
                                                                                                
        for (var i = 0; tempTime < 24 * 60; i++) {                                              //loop to increment the time and push results in array
            var hh = Math.floor(tempTime / 60);                                                 // getting hours of day in 0-24 format
            var mm = (tempTime % 60);                                                           // getting minutes of the hour in 0-55 format
            arrayOfTime[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + amPmValueArray[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
            tempTime = tempTime + minuteInterval;
        }

        console.log('arrayOfTimes ==> ', arrayOfTime);

    }

}