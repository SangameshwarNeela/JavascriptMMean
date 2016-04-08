//Gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        'serve': {
            options: {
                port: 9010
            }
        },
        'path': '/app/'
    });

    grunt.loadNpmTasks('grunt-serve');

};