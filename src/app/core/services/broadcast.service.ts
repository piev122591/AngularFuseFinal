import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { BroadcastEventName } from "../models/broadcast.model";

interface BroadcastEvent {
    key: any;
    data?: any;
}

@Injectable({
    providedIn: "root",
    useClass: BroadcasterService,
})
/**
 * Broadcaster service should not be called directly instead extend the class Broadcast
 */
export class BroadcasterService {
    private _eventBus: Subject<BroadcastEvent>;

    constructor() {
        this._eventBus = new Subject<BroadcastEvent>();
    }

    broadcast(key: any, data?: any): void {
        this._eventBus.next({ key, data });
    }

    // Remember to unsubscribe if you use this in a controller etc.
    on<T>(key: any): Observable<T> {
        return this._eventBus.asObservable().pipe(
            filter((event): boolean => event.key === key),
            map(
                (event): T => {
                    return event.data as T;
                }
            )
        );
    }
}

@Injectable()
export abstract class Broadcast {
    abstract readonly eventName: BroadcastEventName;
    constructor(private broadcasterService: BroadcasterService) {}

    fire(data?: any): void {
        this.broadcasterService.broadcast(this.eventName, data);
    }

    on<T>(): Observable<T> {
        return this.broadcasterService.on<T>(this.eventName);
    }
}
