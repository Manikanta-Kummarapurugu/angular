import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent {
 stats = [
    {
      label: 'Messages',
      count: 152,
      new: 24,
      icon: 'pi pi-envelope',
      gradientFrom: 'from-cyan-400 dark:from-cyan-300',
      gradientTo: 'to-cyan-600 dark:to-cyan-500',
      subtext: 'since last visit',
    },
    {
      label: 'Check-ins',
      count: 532,
      new: 48,
      icon: 'pi pi-map-marker',
      gradientFrom: 'from-orange-400 dark:from-orange-300',
      gradientTo: 'to-orange-600 dark:to-orange-500',
      subtext: 'since last visit',
    },
    {
      label: 'Files Synced',
      count: '28.441',
      usage: '32,56 / 250 GB',
      icon: 'pi pi-file',
      gradientFrom: 'from-slate-400 dark:from-slate-300',
      gradientTo: 'to-slate-600 dark:to-slate-500',
    },
    {
      label: 'Users Online',
      count: '25.660',
      new: 72,
      icon: 'pi pi-users',
      gradientFrom: 'from-violet-400 dark:from-violet-300',
      gradientTo: 'to-violet-600 dark:to-violet-500',
      subtext: 'user this week',
    },
  ];
}
