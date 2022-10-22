export default class Utils {

    constructor(){
    }



    static getFilterSelected = (url,keyword) => {


        const exists = url.indexOf(keyword);

        let value = "";


        if(exists != -1){

            const urlArray = url.split('?');

            urlArray.forEach(filter => {
                const splitters = filter.split('=');

                if(splitters[0] == keyword){
                    value = splitters[1];
                    return;
                }

            })
            
        }
        
        console.log(value == '');

        return value;
    }

    static getRanges = (min,max) => {
        let ranges = [];

        ranges.push(min);

        let actualMin = min;
        let sum = actualMin;
        

        while (sum < max) {

                sum += 100000;
                if (sum < max) {
                    actualMin = sum;
                    ranges.push(actualMin);
                }
        }

       return ranges;
    }

    static nFormatter = (num, digits) => {
        const lookup = [{
                value: 1,
                symbol: ""
            },
            {
                value: 1e3,
                symbol: " k"
            },
            {
                value: 1e6,
                symbol: " M"
            },
            {
                value: 1e9,
                symbol: " G"
            },
            {
                value: 1e12,
                symbol: " T"
            },
            {
                value: 1e15,
                symbol: " P"
            },
            {
                value: 1e18,
                symbol: " E"
            }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }
}