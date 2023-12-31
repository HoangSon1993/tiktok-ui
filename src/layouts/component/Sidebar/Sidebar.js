import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserIcon,
    LiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    UserActiveIcon,
    ExploreActiveIcon,
    LiveActiveIcon,
} from '~/component/icons';
import SuggestedAccounts from '~/component/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar({ children }) {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserIcon />}
                    activeIcon={<UserActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <SuggestedAccounts label="Suggested accounts" />
                <SuggestedAccounts label="Following accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
