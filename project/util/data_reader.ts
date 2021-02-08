import fs from 'fs'

export function readJsonToDataTable(headers: any[], jsonPath: string) {

    let jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    let table = new DataTable(headers);

    for (let data of jsonData) {
        let dataRow: Array<string> = [];
        for ( let header of headers) {
            dataRow.push(data[header]);
        }
        table.add(dataRow);
    }
    
    return table;

}