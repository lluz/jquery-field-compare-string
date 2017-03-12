module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        proj_name: 'jQuery Field Compare String',

        dirs: {
            js_dist_folder: 'dist/js',
            css_dist_folder: 'dist/css'
        },

        uglify : {
            options: {
                banner: "/*! <%= proj_name %> v<%= pkg.version %> - Licensed under the <%= pkg.license %> license - <%= pkg.author %> / Project home: <%= pkg.homepage %> */\n"
            },
            target: {
                files: {
                    "<%= dirs.js_dist_folder %>/jquery.fieldCompareString.min.js" : "<%= dirs.js_dist_folder %>/jquery.fieldCompareString.js"
                }
            }
        },

        cssmin: {
            options: {},
            target: {
                files: {
                    '<%= dirs.css_dist_folder %>/jquery.fieldCompareString.min.css': ['<%= dirs.css_dist_folder %>/jquery.fieldCompareString.css']
                }
            }
        },

        watch: {
            options: {
                livereload: false,
                spawn: false
            },
            js: {
                files: [
                    "<%= dirs.js_dist_folder %>/jquery.fieldCompareString.js"
                ],
                tasks: ["minify_js"]
            },
            css: {
                files: [
                    "<%= dirs.css_dist_folder %>/jquery.fieldCompareString.css"
                ],
                tasks: ["minify_css"]
            }
        },
        
        jshint: {
            files: [
                "<%= dirs.js_dist_folder %>/jquery.fieldCompareString.js"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask("minify_js", [
        "jshint",
        "uglify"
    ]);
    grunt.registerTask("minify_css", [
        "cssmin"
    ]);
    grunt.registerTask("test", [
        "minify_js",
        "minify_css"
    ]);
    grunt.registerTask("default", [
        "test",
        "watch"
    ]);

};