import {
    Component,
    ViewEncapsulation,
    ElementRef,
    Renderer2,
    Input,
} from "@angular/core";
import { NavigationService } from "./service/navigation.service";
import { OnInit } from "@angular/core";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
    // Private
    _variant: string;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
        private navigationService: NavigationService
    ) {
        // Set the private defaults
        this._variant = "vertical-style-1";
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Variant
     */
    get variant(): string {
        return this._variant;
    }

    @Input()
    set variant(value: string) {
        // Remove the old class name
        // this._renderer.removeClass(
        //     this._elementRef.nativeElement,
        //     this.variant
        // );

        // Store the variant value
        this._variant = value;

        // Add the new class name
        // this._renderer.addClass(this._elementRef.nativeElement, value);
    }

    navigationData$ = this.navigationService.defaultNav();
}
