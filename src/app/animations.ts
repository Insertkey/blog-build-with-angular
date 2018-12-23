import {trigger, transition, style, query, animate, group, animateChild, state} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

// 元素飞入飞出动画。从元素上方偏移20px的地方飞入，透明度从0变为1.
export const flyInOutAnimation = trigger('flyInOut', [
  state('in', style({transform: 'translateY(0)', opacity: 1})),
  transition('void => *', [
    style({transform: 'translateY(-20px)', opacity: 0}),
    animate('400ms 100ms ease-out')
  ]),
  transition('* => void', [
    animate(200, style({transform: 'translateY(20px)', opacity: 0}))
  ])
]);
