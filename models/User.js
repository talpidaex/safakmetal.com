var keystone = require('keystone');

var User = new keystone.List('User');


User.add({
  name: {
    type: String
  },
  password: {
    type: keystone.Field.Types.Password
  },
  email: {
    type: keystone.Field.Types.Email,
    unique: true
  },
})

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
  return true;
});

User.defaultColumns = 'id ,name, email';
User.register();