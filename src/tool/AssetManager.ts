import { FileNotFound } from './../dev/CustomError';
import * as Asset from '../const/Asset';

export function getAsset(view: string, file: string): string {
    let path = Asset.Path;
    
    file = file.charAt(0).toUpperCase() + file.substr(1).toLowerCase();

    switch (view.toLowerCase()) {
        case 'start':
            path += '/' + Asset.Start.Path;
            if (Asset.Start.hasOwnProperty(file)) {
                path += '/' + Asset.Start[file];
            } else {
                throw new FileNotFound(file);
            }
            
            break;
        default:
            throw new FileNotFound(view);
    }
    
    return path;
}