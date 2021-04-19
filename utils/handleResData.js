export function handleResData(str){
  var _str = str
  for(var i = true; i == true;) {
    var i = /[:][0-9]{18,}[,]?/.test(_str)
    if(i == true) {
      var handlestr = /[:][0-9]{18,}[,]?/.exec(_str)
      var handlestr2 = /[0-9]{18,}/.exec(handlestr[0])
      _str = _str.replace(handlestr[0],':"'+handlestr2[0]+'",')
    }
  }
  _str = _str.replace(/[,][}]/g,'}')
  return JSON.parse(_str)
}
