import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type SurfaceCardProps = PropsWithChildren & ClassName;

const SurfaceCard: FC<SurfaceCardProps> = (props) => {
    const { children, className } = props;

    return (
        <section className={clsx('rounded-2xl bg-primary-light p-6', className)}>
            {children}
        </section>
    );
};

export default SurfaceCard;
