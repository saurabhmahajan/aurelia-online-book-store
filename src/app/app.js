export class App{
    
    configureRouter(config, router){
        this.router = router;
        config.options.root = '/';
        config.map([
            {
                route: ['', 'home'],
                moduleId: PLATFORM.moduleName('books/list'),
                nav: true,
                name: 'book-list',
                title: 'Home'
            },
            {
                route: 'account',
                moduleId: PLATFORM.moduleName('account/account'),
                nav: true,
                name: 'account',
                title: 'Account'
            }
        ]);
    }

}