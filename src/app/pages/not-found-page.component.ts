import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found section-pad">
      <div class="shell not-found-inner">
        <span class="not-found-mark">✳</span>
        <span class="eyebrow"><span class="eyebrow-dot"></span> A LITTLE WRONG TURN</span>
        <h1>This page wandered<br><em>off to celebrate.</em></h1>
        <p>The link may have changed, but the good stuff is still right this way.</p>
        <a class="button button--dark" routerLink="/">Back to the studio <span>↗</span></a>
      </div>
    </section>
  `,
  styles: [`
    .not-found { text-align: center; background: var(--paper); min-height: 55vh; display:grid; place-items:center; }
    .not-found-inner { display:flex; flex-direction:column; align-items:center; }
    .not-found-mark { color:var(--terracotta); font-size:45px; margin-bottom:18px; }
    h1 { color:var(--ink); font:500 clamp(44px,6vw,70px)/.95 var(--serif); letter-spacing:-.06em; margin:22px 0 15px; }
    h1 em { color:var(--terracotta); font-weight:400; }
    p { color:var(--muted); font-size:12px; line-height:1.8; margin:0 0 25px; }
  `],
})
export class NotFoundPageComponent {}
