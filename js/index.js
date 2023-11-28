
var boton = document.getElementById('button');
boton.addEventListener("click",
    function run() {
        var fromDropdown = document.getElementById("from-dropdown");
        var toDropdown = document.getElementById("to-dropdown");
        var selectedFromOption = fromDropdown.options[fromDropdown.selectedIndex].value;
        var selectedToOption = toDropdown.options[toDropdown.selectedIndex].value;
        var from = document.getElementById("from-area").value;
        try{
            var result = "";
            if(selectedFromOption == "undefined" || selectedToOption == "undefined"){
                return;
            }
            if(selectedFromOption == "xml"){
                from = xmlToJson(from);
            }
            if(selectedFromOption == "toml"){
                from = JSON.stringify(TOML.parse(from));
            }
            if(selectedFromOption == "yaml"){
                from = JSON.stringify(jsyaml.load(from))
            }
            if(selectedFromOption == "csv"){
                from = JSON.stringify(csvJSON(from));
            }
            result = convert(from,selectedFromOption,selectedToOption)
            document.getElementById("to-area").value = result;
        }catch(error){
            console.log(error)
            document.getElementById("to-area").value = "Invalid format!";
        }
    }
)

function convert(input,from,to) {
    if(to == "json"){
        return input;
    }
    if(to == from){
        return "";
    }
    if(to == "yaml"){
        return jsonToYaml(input);
    }
    if(to == "toml"){
        return jsonToToml(input);
    }
    if(to == "csv"){
        return jsonToCsv(input);
    }
    if(to == "xml"){
        return jsonToXML(input);
    }
}
