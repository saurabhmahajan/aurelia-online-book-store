export function configure(aurelia){
    aurelia.use
        .developmentLogging()
        .standardConfiguration();

    aurelia.start().then(a => a.setRoot("app/app"));
}