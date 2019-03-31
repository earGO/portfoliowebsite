const mongoose = require('mongoose'),

    ProjectSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        shortTheme:{
            type:String,
            required:true
        },
        story:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        siteLink:{
          type:String,
        },
        stackFront:[{
            toolName:{
                type:String,
            }
        }],
        stackBack:[{
            toolName:{
                type:String,
            }
        }],
        postmortem:{
            type:String,
        }

    })

module.exports = mongoose.model('Project',ProjectSchema)

