module.exports = {
  format: (translations) => {
    const result = {};
    translations.forEach(item => {
      result[item.id] = item.id;
    });
    return result;
  }
};
