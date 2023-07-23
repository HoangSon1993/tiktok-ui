import classNames from 'classnames/bind';
import Button from '~/component/Button/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1690304400&x-signature=i%2BSejqJMo9FhE3xOizG2j6s%2FZ0c%3D"
                    alt=""
                />

                <div className={cx('follow-btn')}>
                    <Button primary>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>Quoc Nguyen Phu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quoc Nguyen Phu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
