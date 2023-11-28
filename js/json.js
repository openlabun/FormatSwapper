function jsonToYaml(input) {
    var json = JSON.parse(input);
    return jsyaml.dump(json);
}

function jsonToToml(input){
    var json = JSON.parse(input);
    return toml.dump(json);
}

function flattenObject(obj, parentKey = '') {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

function jsonToCsv(input) {
    var jsonData = JSON.parse(input);
    if (!Array.isArray(jsonData)) {
        jsonData = [jsonData];
    }
    // Flatten each JSON object to handle nested structures
    const flattenedData = jsonData.map(obj => flattenObject(obj));

    // Extract headers from the flattened data
    const headers = Array.from(new Set(flattenedData.reduce((acc, obj) => acc.concat(Object.keys(obj)), [])));

    // Create CSV content with headers
    let csvContent = headers.join(',') + '\n';

    // Add data rows to CSV content
    csvContent += flattenedData.map(row =>
      headers.map(header => JSON.stringify(row[header] || '')).join(',')
    ).join('\n');

    return csvContent;
}

function jsonToXML(input){
    var json = JSON.parse(input);
    var options = {compact: true, ignoreComment: true, spaces: 4};
    return js2xml(json,options);
}