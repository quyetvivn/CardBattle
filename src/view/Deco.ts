export function view(prop) {
    return (target, key: string) => {
        // property need to be instantiated before looking up in BaseView
        target[key] = {};

        Reflect.defineMetadata('view', prop, target, key);
    }
}