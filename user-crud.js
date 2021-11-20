class UserCrud {
    static API = "https://jsonplaceholder.typicode.com";
    static ENVIRONMENT = {
        USERS: {
            getUser: "/users",
        }
    };

    // static getByClassName(className) {
    //     return document.querySelector(`.${className}`);
    // };

    _mainContainer = null;

    constructor(className) {
        this._mainContainer = className;
        this.init();
    };

    init() {
        this.setListener(this._mainContainer, 'click', this.onButtonClick);
    };

    getData(data, key) {
        return data.data[key];
    };

    setListener(element, event, callBack) {
        $(element).on(event, callBack);
    };

    createElement(data, containerEl, tag, classList) {
        const element = `<${ tag } class= ${ classList }>${ data }</${ tag }>`;
        $(element).appendTo(containerEl);
    };
}