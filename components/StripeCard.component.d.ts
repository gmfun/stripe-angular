import { EventEmitter, ElementRef } from "@angular/core";
import { StripeToken, StripeInstance, StripeCardOptions } from "../StripeTypes";
import { StripeScriptTag } from "../StripeScriptTag";
export declare class StripeCard {
    ElementRef: ElementRef;
    StripeScriptTag: StripeScriptTag;
    options: StripeCardOptions;
    catcher: EventEmitter<Error>;
    invalid: Error;
    invalidChange: EventEmitter<Error>;
    token: StripeToken;
    tokenChange: EventEmitter<StripeToken>;
    stripe: StripeInstance;
    elements: any;
    constructor(ElementRef: ElementRef, StripeScriptTag: StripeScriptTag);
    ngOnInit(): void;
    createToken(extraData?: any): Promise<StripeToken>;
}
