function decode(code) {
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