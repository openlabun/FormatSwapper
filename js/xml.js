function xmlToJson(input){
	var options = {ignoreComment: true,compact: true};
    return xml2json(input,options);
}
