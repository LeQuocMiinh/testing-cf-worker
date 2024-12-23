import { helloService } from "../api/hello/index.service";
import { IHonoEnv } from "../interface";

export function routes(app: IHonoEnv) {
    app.post('/hello', helloService);
}