This is an example project that tries to use microservice approach for Serverless Functions in Firebase.

Problem to Solve: A way to reduce or better manage dependencies and break monolithic server into individual, self-contained modules in Firebase.

Approach 2: Reorganizing microservices into their own individual Firebase Functions modules. All are can still talk to the same firebase project or has the potential to be talking to multiple firebase projects and even other backend providers.

Advantages:
- Definitely follows the Microservice Architecture.
- Does solve the problem with better dependency managements.

Disadvantages:
- More repetitive code if there's shared code between each microservice.
- Very large changes need to be made, if migrating from a normal firebase functions project.
- Hard to maintain and keep track of microservice endpoints.

Basic Folder structure in each individual Firebase Functions submodule within a mono-repo:
```bash
/my-project
│
├── /functions-gateway        # API Gateway Functions
│   ├── .firebaserc           # Firebase configuration specific to the gateway
│   ├── firebase.json         # Firebase settings for the gateway
│   └── /functions
│       ├── index.js          # Main file for the API gateway functions
│       └── ...               # Other files and folders for the gateway functions
│
├── /functions-service1       # Microservice 1 Functions
│   ├── .firebaserc           # Firebase configuration for service 1
│   ├── firebase.json         # Firebase settings for service 1
│   └── /functions
│       ├── index.js          # Main file for service 1 functions
│       └── ...               # Other files and folders for service 1
│
├── /functions-service2       # Microservice 2 Functions
│   ├── .firebaserc           # Firebase configuration for service 2
│   ├── firebase.json         # Firebase settings for service 2
│   └── /functions
│       ├── index.js          # Main file for service 2 functions
│       └── ...               # Other files and folders for service 2
│
└── ...                       # Other project files and directories

```

How to run this project:
- Please change the `default` in `.firebaserc` to the desired firebase project. If all firebase functions submodules need to talk to the same firebase project, please change all of them.
- A `.env` isn't required, since not much firebase functionality is actually being used in this example project.
- Make sure node version is `18`.
  - If using `nvm`, simply do `nvm use 18`
  - Otherwise, you're on your own.
- Install your dependencies - `npm install` or `yarn install` - for each of the modules.
- Lastly, do `cd {service-name}/functions` and `npm run serve`.
  - If you want to run multiple microservices, then you would need to run each microservice individually in their own terminals.
  - For example, if you need to run both api-gateway and user services, then you need to do:
    - `cd api-gateway/functions` and `npm run serve` in one terminal
    - `cd users/functions` and `npm run serve` in a second terminal
  - The same will apply if you want to run 4 or 5 microservices at the same time.