export default class ModeService {

    async fetchModes() {
        const response = await fetch('http://demo1030918.mockable.io/');
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        };
        const result = await response.json();
        return this.convertObjToArr(result);
    }

    convertObjToArr(obj) {
        let arr = [];
        for(let prop in obj) {
            arr.push({modeName: prop, field: obj[prop].field});
        }
        return arr;
    }
}