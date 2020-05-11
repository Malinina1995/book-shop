import {Book} from "../reducers";
import {data} from "../data/data";

export class BookService {
    getBooks(): Promise<Book[]> {
        return new Promise<Book[]>((resolve, reject) => {
            setTimeout(() => resolve(data), 1000);
        });
    }
}
