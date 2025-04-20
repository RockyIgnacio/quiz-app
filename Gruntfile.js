module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'src/assets/css/home/home.css': 'src/assets/less/home/home.less',
                    'src/assets/css/examination/examination.css': 'src/assets/less/examination/examination.less',
                    'src/assets/css/question/question.css': 'src/assets/less/question/question.less',
                    'src/assets/css/result/result.css': 'src/assets/less/result/result.less',
                }
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
  };
  