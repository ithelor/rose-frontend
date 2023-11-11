'use client';

import { FC } from 'react';
import { EnvelopeSimple, GraduationCap, MapPin } from '@phosphor-icons/react';
import useUserStore from 'domain/store/User/useUserStore';
import SurfaceCard from 'presentation/component/common/block/SurfaceCard';
import CircleImage from 'presentation/component/common/block/CircleImage';
import Detail from './Detail';
import Stat from './Stat';
import ProgressBar from './ProgressBar';

const Intro: FC = () => {
    const user = useUserStore((state) => state.user);
    const { name, avatar, lvl, location, email, todayReviews, totalReviews, successRate } = user;

    return (
        <SurfaceCard className="grid gap-y-5">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semiBold">{name}</h1>
                <CircleImage alt="" src={avatar} size={40} />
            </div>
            <div className="grid w-fit grid-flow-col gap-x-4">
                <Detail icon={GraduationCap} label={lvl} title="Level" />
                <Detail icon={MapPin} label={location} title="Location" />
                <Detail icon={EnvelopeSimple} label={email} title="E-Mail" />
            </div>
            <div className="flex">
                <Stat label="N5 Completion">
                    <div className="w-40">
                        <ProgressBar value={51} />
                    </div>
                </Stat>
                <Stat label="Today Reviews">{todayReviews.toLocaleString()}</Stat>
                <Stat label="Total Reviews">{totalReviews.toLocaleString()}</Stat>
                <Stat label="Success Rate">{successRate}%</Stat>
            </div>
        </SurfaceCard>
    );
};

export default Intro;
