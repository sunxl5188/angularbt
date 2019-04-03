import {trigger, state, style, animate, transition, keyframes, query, group} from '@angular/animations';

// https://blog.csdn.net/kuangshp128/article/details/78300241
// https://segmentfault.com/a/1190000010708986
// https://www.jianshu.com/p/3f96acf572d4
export const routerAnimate = trigger('routerAnimate', [
    transition(':enter', [
        style({
            position: 'absolute'
        }),
        animate('0.5s ease-in-out')
    ]),
    transition('* => *', [
        query(':leave', style({transform: 'translateX(0)', position: 'absolute'}), {optional: true}),
        query(':enter', style({transform: 'translateX(100%)', position: 'absolute'}), {optional: true}),

        group([
            query(':leave', animate('.5s ease-in-out', style({transform: 'translateX(-100%)'})), {optional: true}),
            query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), {optional: true})
        ])
    ])
]);
