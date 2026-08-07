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

  readonly scrolled = signal(false);
  readonly activeSection = signal('leistungen');

  readonly navItems: NavItem[] = [
    { href: '#leistungen', label: 'Leistungen', sectionId: 'leistungen', icon: 'services' },
    { href: '#aufgaben', label: 'Aufgaben', sectionId: 'aufgaben', icon: 'tasks' },
    { href: '#prozess', label: 'Ablauf', sectionId: 'prozess', icon: 'process' },
    { href: '#team', label: 'Team', sectionId: 'team', icon: 'team' },
    { href: '#kontakt', label: 'Kontakt', sectionId: 'kontakt', icon: 'contact' },
  ];

  private sectionObserver?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  ngAfterViewInit(): void {
    const sectionIds = this.navItems.map(item => item.sectionId);

    this.sectionObserver = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: '-32% 0px -36% 0px',
      },
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.sectionObserver?.observe(element);
      }
    });

    this.destroyRef.onDestroy(() => this.sectionObserver?.disconnect());
  }
}
