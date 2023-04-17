const path = require('path');

module.exports.homepage = async (req , res) => {
    const filePath = path.join(__dirname, '..', 'views', 'homepage.html');
    return res.sendFile(filePath);
}