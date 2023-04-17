const fs = require('fs');
const path = require('path');

const lib = {};
// base directory of the data folder
lib.basedir = path.join(__dirname, '../.data/');
// write data to file
lib.create = function (dir, file, data, callback) {
    // opening a file
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);
            fs.ftruncate(fileDescriptor, (err) => {
                fs.writeFile(fileDescriptor, stringData, (err) => {
                    if (!err) {
                        if (!err) {
                            fs.close(fileDescriptor, (err) => {
                                if (!err) {
                                    callback(false);
                                } else {
                                    callback('Error closing a file');
                                }
                            });
                        } else {
                            callback('Error writing a file');
                        }
                    } else {
                        callback('Error truncating a file');
                    }
                });
            });
        } else {
            callback('File may already exists!');
        }
    });
};
// read data from a file
lib.read = function (dir, file, callback) {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};
// update a file
lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert the data to string
            const stringData = JSON.stringify(data);

            // truncate the file
            fs.ftruncate(fileDescriptor, (err1) => {
                if (!err1) {
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err2) => {
                        if (!err2) {
                            // close the file
                            fs.close(fileDescriptor, (err3) => {
                                if (!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing file!');
                                }
                            });
                        } else {
                            callback('Error writing to file!');
                        }
                    });
                } else {
                    callback('Error truncating file!');
                }
            });
        } else {
            console.log('Error updating. File may not exist');
        }
    });
};

// delete a file
lib.delete = function (dir, file, callback) {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) callback(err);
        else callback('Error deleting a data');
    });
};
module.exports = lib;
