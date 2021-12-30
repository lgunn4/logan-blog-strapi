module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa06987b119a6329e05dd0230a33ae57'),
  },
});
