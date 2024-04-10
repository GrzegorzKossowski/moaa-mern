import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: [String],
    required: true,
    default:['user']
  },
}, {
  timestamps: true,
  methods: {
    // Match user entered password to hashed password in database
    async matchPassword(enteredPassword) {
      return await bcrypt.compare(enteredPassword, this.password)
    }
  }
})

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

// adds extra id string from mongo '_id' Object
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
  }
})

export default mongoose.model('User', userSchema)