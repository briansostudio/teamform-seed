//jshint strict: false
var fs = require('fs');
var localSetting;
if(fs.existsSync('./config/local.json')){
	localSetting = JSON.parse(fs.readFileSync('./config/local.json'));
}else{
	var file = fs.readFileSync('./config/local.example.json');
	localSetting = JSON.parse(file);
	fs.writeFile('./config/local.json', file);
}
// var json = fs.readFileSync('./config/local.json');
// console.log(json);
//var json = fs.readFileSync('./config/local.example.json');

module.exports = function(config) {
  config.set({

    basePath: './app',
	frameworks: ['jasmine'],
    files: [
	  'lib/jquery.min.js',
      'lib/angular.min.js',
      'lib/angular-route.min.js',
      'lib/angular-mocks.js',
	  'lib/firebase.js',
	  'lib/angularfire.min.js',	  
	  'js/*.js',
      'unit_tests/*.js'	  
    ],
	exclude: [
	],
	preprocessors: {	 	
		 'js/site.js' : ['coverage'],		
		 'js/index.js' : ['coverage'],
		 'js/admin.js' : ['coverage'],
		 'js/team.js' : ['coverage'],
		 'js/member.js' : ['coverage']
	},
	reporters: ['progress', 'coverage'],
	coverageReporter: {
			type: 'html',
			dir: 'coverage/',
			subdir: '.'
	},
	port: 8080,
	colors: true,
    browsers: localSetting.browsers,
	singleRun: true,
    plugins: localSetting.plugins
  });
};
