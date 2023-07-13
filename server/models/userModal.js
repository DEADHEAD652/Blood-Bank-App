const mongoose = required("mongoose");

const userScheama = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "organisation", "user", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      require: function () {
        if (role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      require: function () {
        if (role === "hospital") {
          return true;
        }
        return false;
      },
    },

    email: {
      type: String,
      required: [true, "email is requiredd"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "password is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userScheama);
