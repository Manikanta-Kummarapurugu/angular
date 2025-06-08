import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, ButtonModule],
    template: ` 
                <div class="layout-topbar">
                    <div class="layout-topbar-logo-container">
                        <p-button outlined="true" class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                            <i class="pi pi-bars"></i>
                        </p-button>
                    </div>
                    <div class="layout-topbar-actions">
                        <div class="layout-config-menu">
                            <p-button outlined="true"  type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                                <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                            </p-button>
                        </div>
                        <!-- <p-button outlined="true"  class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-ellipsis-v"></i>
                        </p-button> -->
                        <p-button (click)="mobileMenuVisible = !mobileMenuVisible"   class="layout-topbar-menu-button layout-topbar-action lg:hidden"
>
                            <i class="pi pi-ellipsis-v"></i>
                        </p-button>
                        <div *ngIf="mobileMenuVisible || isDesktop" class="layout-topbar-menu">
                            <div class="layout-topbar-menu-content">
                                <p-button outlined="true"  type="button" class="layout-topbar-action">
                                    <i class="pi pi-calendar"></i>
                                    <span>Calendar</span>
                                </p-button>
                                <p-button outlined="true"  type="button" class="layout-topbar-action">
                                    <i class="pi pi-inbox"></i>
                                    <span>Messages</span>
                                </p-button>
                                <p-button outlined="true"  type="button" class="layout-topbar-action">
                                    <i class="pi pi-user"></i>
                                    <span>Profile</span>
                                </p-button>
                            </div>
                        </div>
                    </div>
                </div>
              `
})
export class AppTopbar {
    items!: MenuItem[];
    constructor(public layoutService: LayoutService) { }
    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
    isDesktop: boolean = window.innerWidth >= 1024; // Adjust 1024px as needed
    mobileMenuVisible = false;

    @HostListener('window:resize')
    onResize() {
        this.isDesktop = window.innerWidth >= 1024;

        // Hide mobile menu when switching to desktop
        if (this.isDesktop) {
            this.mobileMenuVisible = false;
        }
    }
}
