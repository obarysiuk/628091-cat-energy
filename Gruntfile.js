"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [require("autoprefixer")()]
        },
        src: "build/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: ["build/*.html", "build/css/*.css"]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["source/less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    },

    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "source",
            src: ["fonts/**/*.{woff,woff2}", "img/**"],
            dest: "build"
          }
        ]
      }
    },

    clean: {
      build: ["build"]
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    svgstore: {
      options: {
        includeTitleElement: false
      },
      sprite: {
        files: {
          "build/img/sprite.svg": ["source/img/icon-*.svg"]
        }
      }
    },

    posthtml: {
      options: {
        use: [require("posthtml-include")()]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: "source",
            src: ["*.html"],
            dest: "build/"
          }
        ]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [
          {
            expand: true,
            src: ["source/img/**/*.{png,jpg,svg}"]
          }
        ]
      }
    },

    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [
          {
            expand: true,
            src: ["source/img/**/*.{png,jpg}"]
          }
        ]
      }
    },

    htmlmin: {
      html: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "build/index.html": "build/index.html",
          "build/catalog.html": "build/catalog.html",
          "build/form.html": "build/form.html"
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          "build/js/script.min.js": [
            "source/js/main.js",
            "source/js/picturefill.js"
          ]
        }
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "uglify",
    "svgstore",
    "posthtml",
    "htmlmin"
  ]);
};
