import { FC, JSXElementConstructor, PropsWithChildren } from 'react';

type PropsT = PropsWithChildren & {
    components: JSXElementConstructor<PropsWithChildren<unknown>>[];
};

const ContextComposer: FC<PropsT> = (props) => {
    const { children, components = [] } = props;

    return (
        <>
            {components.reduceRight(
                (AccumulatedComponents, CurrentComponent) => (
                    <CurrentComponent>{AccumulatedComponents}</CurrentComponent>
                ),
                children,
            )}
        </>
    );
};

export default ContextComposer;
