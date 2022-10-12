const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    title: String,
    image: {
      type: String,
      default: "/images/event.jpg",
    },
    description: String,
    location: String,
    date: Date,
    time: String,
    maxAttendees: Number,
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    organizer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Event', eventSchema);
