const mongoose = require('mongoose');

/**
 * Mongoose schema for combo object.
 */

let basesSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['Chopped Romaine', 'Baby Spinach', 'Spring Mix', 'Shredded Kale', 'Warm Wild Rice', 'Warm Quinoa'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});

let toppingsSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['Raisins', 'Apples', 'Basil', 'Raw Carrots', 'Chickpeas', 'Cilantro', 'Cucumber', 'Raw Beet', 'Red Onion', 'Roasted Sweet Potato', 'Shredded Cabbage', 'Spicy Broccoli', 'Tomato', 'Lentils', 'Spicy Sunflower Seeds', 'Crispy Rice', 'Toasted Almonds', 'Tortilla Chips'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});

let premiumsSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['Roasted Brussels Sprouts', 'Curry Roasted Cauliflower', 'Pickled Carrots Celery', 'Blue Cheese', 'Goat Cheese', 'Shaved Parmesan', 'Parmesan Crisp', 'Hard Boiled Egg', 'Hot Roasted Sweet Potatoes', 'Avocado', 'Roasted Sesame Tofu', 'Warm Portobello Mix', 'Blackened Chicken', 'Roasted Chicken', 'Steelhead'],
    },
    Amount: {
        type: Number,
        default:1,
        required: "Number is required"
    }
});

let dressingsSchema = new mongoose.Schema({
    Name: {
        type: String,
        enum: ['Peppercorn Tahina Dressing', 'Cranberry Maple Vinaigrette', 'Green Goddess Ranch Dressing', 'Balsamic Vinaigrette', 'Balsamic Vinegar', 'Caesar Dressing', 'Extra Virgin Olive Oil', 'Lime Cilantro Jalapeno Dressing Vinaigrette', 'Miso Sesame Ginger Dressing', 'Pesto Vinaigrette', 'Spicy Cashew Dressing', 'Hot Sauce', 'Fresh Lime Squeeze', 'Fresh Lemon Squeeze', 'Red Chili'],
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
            required: "Bowls is required"
        },
        Bowl: {
            type: [[basesSchema], [toppingsSchema], [premiumsSchema], [dressingsSchema]],
            required: "Bowls is required"
        },
        Smoothie: {
            type: String,
            required: "Smoothie is required"
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
