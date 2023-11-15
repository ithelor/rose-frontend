declare namespace Time {
    type Year<T = number> = T;
    type Day<T = number> = T;
    type Minute<T = number> = T;
    type Second<T = number> = T;
    type Millisecond<T = number> = T;
}

declare type HTMLString = string;
declare type ClassName = Pick<React.HTMLAttributes<HTMLElement>, 'className'>;
declare type IconType = FC<SVGProps<SVGSVGElement>>;
