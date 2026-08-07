import { AfterViewInit, Component, DestroyRef, HostListener, inject, signal } from '@angular/core';
import { Logo } from '../logo/logo';

interface NavItem {
  href: string;
  label: string;
  sectionId: string;
  icon: 'services' | 'tasks' | 'process' | 'team' | 'contact';
}

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollSpyOffset = 120;
  private scrollSpyScheduled = false;

  readonly scrolled = signal(false);
  readonly activeSection = signal('leistungen');

  readonly navItems: NavItem[] = [
    { href: '#leistungen', label: 'Leistungen', sectionId: 'leistungen', icon: 'services' },
    { href: '#aufgaben', label: 'Aufgaben', sectionId: 'aufgaben', icon: 'tasks' },
    { href: '#prozess', label: 'Ablauf', sectionId: 'prozess', icon: 'process' },
    { href: '#team', label: 'Team', sectionId: 'team', icon: 'team' },
    { href: '#kontakt', label: 'Kontakt', sectionId: 'kontakt', icon: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
    this.scheduleScrollSpyUpdate();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.scheduleScrollSpyUpdate();
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.updateActiveSection());

    this.destroyRef.onDestroy(() => {
      this.scrollSpyScheduled = false;
    });
  }

  onNavClick(sectionId: string): void {
    this.activeSection.set(sectionId);
    requestAnimationFrame(() => this.updateActiveSection());
  }

  private scheduleScrollSpyUpdate(): void {
    if (this.scrollSpyScheduled) {
      return;
    }

    this.scrollSpyScheduled = true;
    requestAnimationFrame(() => {
      this.scrollSpyScheduled = false;
      this.updateActiveSection();
    });
  }

  private updateActiveSection(): void {
    const sections = this.navItems
      .map(item => ({
        id: item.sectionId,
        element: document.getElementById(item.sectionId),
      }))
      .filter((section): section is { id: string; element: HTMLElement } => section.element !== null);

    if (!sections.length) {
      return;
    }

    const offset = this.scrollSpyOffset;
    let activeId = sections[0].id;

    for (const section of sections) {
      if (section.element.getBoundingClientRect().top <= offset) {
        activeId = section.id;
      }
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    if (atBottom) {
      activeId = sections[sections.length - 1].id;
    }

    this.activeSection.set(activeId);
  }
}
