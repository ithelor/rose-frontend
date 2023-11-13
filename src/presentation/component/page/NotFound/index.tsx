'use client';

import { FC } from 'react';
import { HOME } from 'constant/route';
import NotFoundIcon from 'presentation/svg/404.svg';
import ButtonLink from 'presentation/component/common/typography/ButtonLink';

const NotFound: FC = () => {
    return (
        <div className="flex flex-1 justify-center p-8">
            <div className="grid justify-items-center gap-y-7 self-center text-center">
                <span className="text-5xl font-semiBold">Page Not Found</span>
                <NotFoundIcon height={200} />
                <ButtonLink href={HOME} color="secondary">
                    Back to Home Page
                </ButtonLink>
            </div>
        </div>
    );
};

export default NotFound;
