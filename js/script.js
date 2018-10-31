'use strict';

// Projects Data
var projects = [
    {
        "fileName" : "squad",
        "title" : "SquadSpinner",
        "description" : "Web app allowing you to create a \"Squad\" lobby for your group of friends or party goers to join and queue music from Youtube, SoundCloud, Vimeo and Twitch. Queued songs are played by your machine only.",
        "link": "https://squadspinner.herokuapp.com"
    },
    {
        "fileName" : "rsdb",
        "title" : "RocketShippDB",
        "description" : "A movie database webapp that allows you to search and favorite any movie. Watch trailers, view cast and monitor revenue being made by a movie from the given budget.",
        "tech" : ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Passport.js', 'Bootstrap&#8209;React', 'Font&#8209;Awesome'],
        "link": "https://rocketshippdb.herokuapp.com"
      },
      {
        "fileName" : "joey",
        "title" : "JosephGrant.net",
        "description" : "A portfolio website built for a UT Radio-Television-Film graduate. This from scratch website consumes the Vimeo API and features a custom Google Form.",
        "tech" : ['HTML5', 'CSS3', 'Semantic&#8209;UI', 'jQuery', 'Font&#8209;Awesome'],
        "link": "http://www.josephgrant.net/"
      },
      {
        "fileName" : "david",
        "title" : "DavidShipp.com",
        "description" : "A business website built for my father who is a mortgage loan originator. I used WordPress to build this site to acclimate myself with it and it's plugins.",
        "tech" : ['WordPress', 'PHP', 'CSS3', 'Beaver-Builder'],
        "link": "http://www.davidshipp.com/"
      },
      {
        "fileName" : "gist",
        "title" : "Gist Blog",
        "description" : "Mini app which consumes the Github API to pull information and comments from my gist posts.",
        "tech" : ['HTML5', 'CSS3', 'Bootstrap', 'Animate.css', 'jQuery', 'Github API'],
        "link": "https://rocketshipp.github.io/javascript-workbook/apps/11gist-blog/"
      },
      {
        "fileName" : "vans",
        "title" : "Vans Shoes Site",
        "description" : "This is a vans mockup site built in the intro course of ACA. From scratch site without javascript.",
        "tech" : ['HTML5', 'CSS3', 'Bootstrap'],
        "link": "https://rocketshipp.github.io/intro-workbook/10LessonTen/Checkpoint2/"
      },
      {
        "fileName" : "ninja",
        "title" : "Ninja Store",
        "description" : "This is a mock-up web store built in the intro course of ACA. From scratch site without javascript.",
        "tech" : ['HTML5', 'CSS3', 'Bootstrap', 'Font&#8209;Awesome', 'Animate.css'],
        "link": "https://rocketshipp.github.io/intro-workbook/12LessonTwelve/homework/"
      }
];


$(document).ready(function() {

    // Determines device size with Bootstrap breakpoints
    function getBootstrapBreakpoint() {
        var w = $(document).innerWidth();
        return (w < 768) ? 'xs' : ((w < 992) ? 'sm' : ((w < 1200) ? 'md' : 'lg'));
    };

    // Device size reference
    var $deviceSize = getBootstrapBreakpoint();

    // Fixed welcome component logic
    function fixedComponentLogic() {
        var welcome = $('#welcome');
        if ($deviceSize == 'lg') {
            if (welcome.hasClass('fixed-top')) {
                
            } else {
                welcome.addClass('fixed-top');
                welcome.removeClass('welcome-height')
            }
        } else {
            if (welcome.hasClass('fixed-top')) {
                welcome.removeClass('fixed-top');
                welcome.addClass('welcome-height')
            }
        }
    }

    // Scroll to Contact button
    $("#jumpToContact").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        $("html, body").animate({scrollTop: $("#contact").offset().top}, 1000);
     });

    // Appends each project in the array to the #projects div
    projects.forEach(function(project) {
        $('#projects').append(`
        <div class="project-container">
            <span class="title-expander" data-toggle="collapse" href="#${project.fileName}">
                <p>${project.title}</p>
            </span>
            <div class="collapse project-content" id="${project.fileName}">
                <div class="dropdown-divider"></div>
                <img src="./img/${project.fileName}.jpg" class="img-fluid" alt="${project.fileName}">
                <p class="project-description">${project.description}</p>
                <div class="dropdown-divider"></div>
                <a href="${project.link}" target="_blank" class="btn btn-dark">DEMO</a>
            </div>
        </div>
        `);
    });    

    // Scroll to top button
    $("#toTop").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        $("html, body").animate({scrollTop: 0}, 1000);
     });



    // Device size listener
    $(window).resize(function() {
        $deviceSize = getBootstrapBreakpoint();
        fixedComponentLogic();   
        console.log($deviceSize);
          
    });

    fixedComponentLogic();
    
});