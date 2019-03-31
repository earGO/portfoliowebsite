let Project = require('../../models/Project')


const data = [
    {
       title:'This very portfolio',
        shortTheme:'Portfolio iz awesome',
        story:'Bacon ipsum dolor amet doner hamburger meatloaf ball tip, kevin burgdoggen venison tenderloin filet mignon sausage fatback salami. Frankfurter venison filet mignon ham swine jerky pork belly turducken chicken. Ham burgdoggen tri-tip kielbasa rump, pig ribeye shank. T-bone biltong cow fatback picanha flank ham hock jerky. Meatball cow cupim flank pork loin, turducken ham hock salami tenderloin turkey picanha shankle hamburger sausage frankfurter. Pancetta pork bacon tri-tip doner short loin cupim ball tip alcatra jerky chicken tail.',
        image: 'https://c1.staticflickr.com/7/6183/6140263784_5ebce292d2_b.jpg',
        siteLink:'',
        stackFront:[
            {toolName:'HTML'},
            {toolName:'Javascript'},
            {toolName:'CSS with SASS'},
            {toolName:'Figma'}
            ],
        stackBack:[
            {toolName:'NodeJS'},
            {toolName:'Express'},
            {toolName:'MongoDB on Atlas'},
            {toolName:'Hroku'},
            ],
        postmortem: 'Bacon ipsum dolor amet doner hamburger meatloaf ball tip, kevin burgdoggen venison tenderloin filet mignon sausage fatback salami. Frankfurter venison filet mignon ham swine jerky pork belly turducken chicken. Ham burgdoggen tri-tip kielbasa rump, pig ribeye shank. T-bone biltong cow fatback picanha flank ham hock jerky. Meatball cow cupim flank pork loin, turducken ham hock salami tenderloin turkey picanha shankle hamburger sausage frankfurter. Pancetta pork bacon tri-tip doner short loin cupim ball tip alcatra jerky chicken tail.'
    },
    {
        title:'Some baker web site',
        shortTheme:'Web site for loolz',
        story:'Bacon ipsum dolor amet doner hamburger meatloaf ball tip, kevin burgdoggen venison tenderloin filet mignon sausage fatback salami. Frankfurter venison filet mignon ham swine jerky pork belly turducken chicken. Ham burgdoggen tri-tip kielbasa rump, pig ribeye shank. T-bone biltong cow fatback picanha flank ham hock jerky. Meatball cow cupim flank pork loin, turducken ham hock salami tenderloin turkey picanha shankle hamburger sausage frankfurter. Pancetta pork bacon tri-tip doner short loin cupim ball tip alcatra jerky chicken tail.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/The_Glassier_Bayal_Camp.jpg',
        siteLink:'',
        stackFront:[
            {toolName:'HTML'},
            {toolName:'Javascript'},
            {toolName:'CSS with SASS'},
            {toolName:'Figma'}
            ],
        stackBack:[
            {toolName:'NodeJS'},
            {toolName:'Express'},
            {toolName:'MongoDB on Atlas'},
            {toolName:'Passport, Bcrypt, and stuff'},
            {toolName:'Hroku'}
            ],
        postmortem: 'Bacon ipsum dolor amet doner hamburger meatloaf ball tip, kevin burgdoggen venison tenderloin filet mignon sausage fatback salami. Frankfurter venison filet mignon ham swine jerky pork belly turducken chicken. Ham burgdoggen tri-tip kielbasa rump, pig ribeye shank. T-bone biltong cow fatback picanha flank ham hock jerky. Meatball cow cupim flank pork loin, turducken ham hock salami tenderloin turkey picanha shankle hamburger sausage frankfurter. Pancetta pork bacon tri-tip doner short loin cupim ball tip alcatra jerky chicken tail.'
    },
    {
        title:'Some camping web site',
        shortTheme:'Web site for loolz and camper shit',
        story:'Bacon ipsum dolor amet doner hamburger meatloaf ball tip, kevin burgdoggen venison tenderloin filet mignon sausage fatback salami. Frankfurter venison filet mignon ham swine jerky pork belly turducken chicken. Ham burgdoggen tri-tip kielbasa rump, pig ribeye shank. T-bone biltong cow fatback picanha flank ham hock jerky. Meatball cow cupim flank pork loin, turducken ham hock salami tenderloin turkey picanha shankle hamburger sausage frankfurter. Pancetta pork bacon tri-tip doner short loin cupim ball tip alcatra jerky chicken tail.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lake_mapourika_NZ.jpeg/1024px-Lake_mapourika_NZ.jpeg',
        siteLink:'',
        stackFront:[
            {toolName:'HTML'},
            {toolName:'Javascript'},
            {toolName:'CSS with SASS'},
            {toolName:'Figma'}
            ],
        stackBack:[
            {toolName:'NodeJS'},
            {toolName:'Express'},
            {toolName:'MongoDB on Atlas'},
            {toolName:'Passport, Bcrypt, and stuff'},
            {toolName:'Hroku'},
            {toolName:'ElectonJS'}
            ],
        postmortem: 'Bacon ipsum dolor amet doner hamburger meatloaf ball tip, kevin burgdoggen venison tenderloin filet mignon sausage fatback salami. Frankfurter venison filet mignon ham swine jerky pork belly turducken chicken. Ham burgdoggen tri-tip kielbasa rump, pig ribeye shank. T-bone biltong cow fatback picanha flank ham hock jerky. Meatball cow cupim flank pork loin, turducken ham hock salami tenderloin turkey picanha shankle hamburger sausage frankfurter. Pancetta pork bacon tri-tip doner short loin cupim ball tip alcatra jerky chicken tail.'
    }
]



let seedDB = function() {
    //remove all existing projects
    Project.remove({},(err) => {
        if(err){
            console.log('error removing all posts from Projects collection \n', err)
        } else {
            console.log('successfully removed all posts from Projects collection')
            data.forEach(seed => {
                Project.create(seed,(err,project) => {
                    if (err) {
                        console.log('error creating project \n',err)
                    } else {
                        console.log('created new project!')
                    }
                })
            })
        }
    })
}

module.exports = seedDB;