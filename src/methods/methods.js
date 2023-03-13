function decode(code) {
    const validation = validate(code);
    return validation;
}

function validate(code){
  if (!code || !code.code || typeof code.code !== "string" || !code.code.includes("0")) {
    dataJson = {
      "status": 400,
      "message": "Invalid format"
    };
  return dataJson;
  } else{
    const uncoding = uncode(code);
    return uncoding;
  }
}

function uncode(code){
  const decoded = code;
  const data = decoded.code.split("0").filter(Boolean);
  const [first_name, last_name, id] = data;
  dataJson = {
      "first_name": first_name,
      "last_name": last_name,
      "id": id
    };
  return dataJson;
}

module.exports = decode;