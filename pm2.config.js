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
      {
         name: 'Taktix Staging',
         script: 'yarn',
         args: 'start -p 3100',
         interpreter: '/bin/bash',
         env_production: {
            NODE_ENV: 'production',
         },
      },
   ],
};
