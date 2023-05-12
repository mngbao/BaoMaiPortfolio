// module.exports = function (grunt) {
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     sass: {
//       dist: {
//         files: {
//           'style/style.css': 'sass/style.scss'
//         }
//       }
//     },
//     watch: {
//       css: {
//         files: '**/*.scss',
//         tasks: ['sass']
//       }
//     }
//   });
//   grunt.loadNpmTasks('grunt-contrib-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.registerTask('default', ['watch']);
// }

module.exports = function (grunt) {
  // load grunt tasks automatically
  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    // Remove unused CSS from files
    uncss: {
      dist: {
        files: {
          "dist/css/main.css": ["index.html"],
        },
      },
    },
    // Minify images
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "./img/",
            src: ["**/*.{png,jpg,gif,svg}"],
            dest: "dist/img/",
          },
        ],
      },
    },
    // Watch files and perform actions when they change
    watch: {
      css: {
        files: "./scss/**/*.scss",
        tasks: ["sass", "cssmin"],
      },
      js: {
        files: "./js/**/*.js",
        tasks: ["uglify"],
      },
      images: {
        files: "./img/**/*.{png,jpg,gif,svg}",
        tasks: ["imagemin"],
      },
    },
    // Compile Sass files to CSS
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "dist/css/main.css": "./scss/style.scss",
        },
      },
    },
    // Minify JS files
    uglify: {
      my_target: {
        files: {
          "dist/js/main.min.js": ["./js/**/*.js"],
        },
      },
    },
    // Minify CSS files
    cssmin: {
      target: {
        files: {
          "dist/css/main.min.css": ["dist/css/**/*.css"],
        },
      },
    },
  });

  // Register default tasks
  grunt.registerTask("default", ["watch"]);
  grunt.loadNpmTasks("grunt-sass");
};
