var url = "http://data.fixer.io/api/latest?access_key=4f8b69ba7fbf96653323a90afd77bde4&base=EUR";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
        console.log('READYSTATE 4!')
        console.log(`XHR.STATUS: ${xhr.status}`);
        console.log(`XHR.RESPONSETEXT: ${xhr.responseText}`);
        console.log('END RESPONSE TEXT');

        const menu1 = document.getElementById('dropDown1');
        const menu2 = document.getElementById('dropDown2');
    
        var data = JSON.parse(xhr.response);
        console.log(`HERE's THE DATA ${data.rates.USD}`);

        const rateName = document.createElement('option');
        rateName.value = 'guns and butts';
        rateName.setAttribute('class', 'righteious class');

        // for each data.rates property (the names of the currencies) - creating options in the selections
        for (x in data.rates){
            const rateName1 = document.createElement('option');
            const rateName2 = document.createElement('option');
            rateName1.setAttribute('value', x);
            rateName1.setAttribute('value', x);
            rateName1.innerHTML = x;
            rateName2.innerHTML = x;
            menu1.appendChild(rateName1);
            menu2.appendChild(rateName2);
    }


}
};

xhr.send();