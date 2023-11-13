import UnauthorizedHeader from 'presentation/component/layout/UnauthorizedHeader';
import NotFoundPage from 'presentation/component/page/NotFound';

const NotFound = () => {
    return (
        <div className="flex h-full flex-1 flex-col">
            <UnauthorizedHeader />
            <NotFoundPage />
        </div>
    );
};

export default NotFound;
