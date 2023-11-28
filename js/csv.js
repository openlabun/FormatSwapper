function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')
    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            var line = currentline[j];
            line = line.replaceAll('"','');
            obj[headers[j]] = line
        }
        result.push(obj)
    }
    return result
}