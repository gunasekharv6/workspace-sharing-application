const mongoose = require('mongoose');

/**
 * Mongoose schema for combo object.
 */

let amenitiesSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['wifi', 'noNoice', 'projector', 'whiteboard', 'laptop', 'printer'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});

let fitnessSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum:['fitnessConsultant', 'gymArea', 'danceRoom', 'yoga'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});

let roomsSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['personalDesk', 'meetingRoom', 'conferenceRoom', 'discussionRoom',
        'smokingRoom', 'eventSpace'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});

let gamingSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['snooker', 'tableTennis', 'playStation'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});


let commentsSchema = new mongoose.Schema({
    Content: {
        type: String,
        required: "Content is required"
    },
    CreatedTime: {
        type: String,
        default:new Date().toLocaleString()
    },
    Owner: {
        type: String,
        required: "Owner is required"
    }
});

let ComboSchema = new mongoose.Schema({
        Name: {
            type: String,
            // required: "Name is required"
        },
        Bowl: {
            type: [[amenitiesSchema], [fitnessSchema], [roomsSchema], [gamingSchema]],
            // required: "Plan is required"
        },
        Cafeteria: {
            type: String,
            // required: "Space is required"
        },
        Owner: {
            type: String,
            required: "Owner is required"
        },
        OwnerEmail: {
            type: String,
            required: "Owner email is required"
        },
        CreatedTime: {
            type: Date,
            default:Date.now
        },
        Comments: {
            type: [commentsSchema],
            default: null
        }
    }
);


module.exports = mongoose.model('combo', ComboSchema);
