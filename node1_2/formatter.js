function formatName(text) {
    if (!text) return '';
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  
  module.exports = formatName;
  