var bio = {
    "name": "Matt Wlodarski",
    "role": "Web App Developer",
    "contacts": {
        "mobile": "847-513-2640",
        "email": "mwlodar12@gmail.com",
        "github": "mwlodar",
        "twitter": "@mattwlodarski",
        "location": "Tallahassee, FL"
    },
    "welcomeMessage": "Welcome to my resume - I hope you like what you see!",
    "skills": ["Front End Development", " Mobile App Development", " Business", " Clinical Orthopedic Specialist"],
    "biopic": "images/me.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            if (bio.skills.length > 0) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

// Education Experience Builder
var education = {
    "schools": [{
        "name": "Northwestern University",
        "location": "Chicago, IL",
        "degree": "Doctor of Physical Therapy (DPT)",
        "majors": ["Orthopedics"],
        "dates": 2013,
        "url": "http://www.feinberg.northwestern.edu/sites/pthms/"
    }, {
        "name": "Loyola University",
        "location": "Chicago, IL",
        "degree": "Masters in Business Administration (MBA)",
        "majors": ["Finance"],
        "dates": 2009,
        "url": "http://www.luc.edu/quinlan/mba/"
    }, {
        "name": "Loyola University",
        "location": "Chicago, IL",
        "degree": "Bachelor of Science",
        "majors": ["Molecular Biology"],
        "dates": 2008,
        "url": "http://www.luc.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree Program",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Front End Web Developement",
        "school": "Team Treehouse",
        "dates": 2015,
        "url": "https://teamtreehouse.com/tracks/front-end-web-development"
    }],
    "display": function() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (var school in education.schools) {
                if (education.schools.hasOwnProperty(school)) {
                    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
                    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                    var formattedNameDegree = formattedName + " " + formattedDegree;
                    $(".education-entry").append(formattedNameDegree);

                    $("a:last").attr("href", education.schools[school].url);

                    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                    $(".education-entry").append(formattedDates);

                    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    $(".education-entry").append(formattedLocation);

                    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                    $(".education-entry").append(formattedMajor);
                }
            }
            $("#education").append(HTMLonlineClasses);
            for (var course in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(course)) {
                    $("#education").append(HTMLschoolStart);

                    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var formattedTitleSchool = formattedTitle + " " + formattedSchool;
                    $(".education-entry:last").append(formattedTitleSchool);

                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                    $(".education-entry:last").append(formattedOnlineDates);

                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                    $(".education-entry:last").append(formattedOnlineURL);
                    $("a:last").attr("href", education.onlineCourses[course].url);
                }
            }
        }
    }
};
// Work Experience Builder
var work = {
    "jobs": [{
        "employer": "Integrated Mechanical Care",
        "title": "Director of Clinical Information Systems and Clinical Orthopedic Specialist",
        "location": "Tallahassee, FL",
        "dates": "Sept 2013 - present",
        "description": "Developed and managed patient outcomes reporting systems and treated patients with various orthopedic challenges."
    }, {
        "employer": "Body Werks Physical Therapy",
        "title": "Doctor of Physical Therapy",
        "location": "Arlington Heights, IL",
        "dates": "June 2013 - Sept 2013",
        "description": "Treated patients with various orthopedic challenges."
    }],
    "display": function() {
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedWorkLocation);
                $(".work-entry:last").append(formattedEmployerTitle);
                $(".work-entry:last").append(formattedWorkDates);
                $(".work-entry:last").append(formattedWorkDescription);
            }
        }
    }
};
// Project Builder
var projects = {
    "project": [{
        "title": "Clinical Outcomes Registry",
        "dates": "Apr 2014 - present",
        "description": "Developed a front end and back end system for collecting and reporting patient outcome information.",
        "images": ["images/registry1.png", "images/registry2.jpg"]
    }, {
        "title": "Clinical Documentation System",
        "dates": "Dec 2014 - present",
        "description": "Developed a front end and back end system for collecting and reporting clinical treatment information.",
        "images": ["images/cds1.jpg", "images/cds2.jpg"]
    }],
    "display": function() {
        for (var proj in projects.project) {
            if (projects.project.hasOwnProperty(proj)) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedDescription);
                for (var image in projects.project[proj].images) {
                    if (projects.project[proj].images.length > 0) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};
// Menu Builder
var menu = {
    "menu": [{
        "title": "Work",
        "link": "#workH2"
    }, {
        "title": "Education",
        "link": "#educationH2"
    }, {
        "title": "Projects",
        "link": "#projectsH2"
    }, {
        "title": "Map",
        "link": "#mapDiv"
    }, {
        "title": "Contact Me!",
        "link": "mailto:mwlodar12@gmail.com"
    }],
    "display": function() {
        var entry;
        for (i = 0; i < menu.menu.length; i = i + 1) {
            entry = '<li><a href="' + menu.menu[i].link + '">' + menu.menu[i].title + '</a></li>';
            $("#navmenu:last").append(entry);
        }
    }
};

menu.display();
work.display();
projects.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);