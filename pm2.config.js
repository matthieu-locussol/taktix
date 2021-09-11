module.exports = {
   apps: [
      {
         name: 'Taktix',
         script: 'yarn',
         args: 'start',
         interpreter: '/bin/bash',
         env_production: {
            NODE_ENV: 'production',
         },
      },
   ],
};
