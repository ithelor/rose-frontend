'use client';

import Skeleton from '@mui/material/Skeleton';
import Icon from 'presentation/component/common/block/Icon';

const Dashboard = () => {
    return (
        <div>
            <span>Dashboard</span>
            <Icon icon="user" />
            {/* <Skeleton variant="rectangular" width={240} height={120} /> */}
            <Skeleton />
        </div>
    );
};

export default Dashboard;
