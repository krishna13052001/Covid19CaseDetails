$(document).ready(function(){
    init()
    function init(){
      var url = "https://api.covid19india.org/state_district_wise.json"
      var data = ''
      var date = ""
      var time = ""
      var value = ""
      var arr = []
      $.get(url,function(value){
        console.log(value);
        for(const state in value){
            var totalActive=0,totalCases=0,totalDeathes=0, totalRecovered=0, newCases=0, newDeaths=0, newRecovered=0;
            const stateData =value[state];
            for(const district in stateData){
                if(stateData["statecode"] == "UN"){
                    break;
                }
                const districtData =stateData[district];
                for(const districName in districtData){
                    if(districtData[districName]["active"]){
                        totalActive += districtData[districName]["active"];
                        totalCases += districtData[districName]["confirmed"];
                        totalDeathes += districtData[districName]["deceased"];
                        totalRecovered += districtData[districName]["recovered"];    
                        newCases += districtData[districName].delta["confirmed"];
                        newDeaths += districtData[districName].delta["deceased"];
                        newRecovered += districtData[districName].delta["recovered"];
                    }
                }
            }
            if(stateData["statecode"] == "UN"){
                continue;
            }
            // console.log(indexOf(value))
            var stateFirstName = value[state]["statecode"];
            data=`
            <tr>
                <td><a href="state/${stateData['statecode']}" id="state" >${state}</a></td>
                <td>${stateFirstName}</td>
                <td>${totalCases}</td>
                <td>${totalActive}</td>
                <td>${totalRecovered}</td>
                <td>${totalDeathes}</td>
                <td>${newCases}</td>
                <td>${newDeaths}</td>
                <td>${newRecovered}</td>
            </tr>
            `
            arr+=data;
        }
        $("#data").html(arr);
      })
    }
})