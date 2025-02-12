const mongoose = require ('mongoose');

const AppointmentSchema = new mongoose.Schema ({
    user: { type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true},
    service: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: True
    },

    date : {type: Date, required: True},

    status: { type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'
        ], default: 'Pending'},
        
    },

    {timestamps: true}
);

module.exports = mongoose.model ('Appointment', AppointmentSchema);