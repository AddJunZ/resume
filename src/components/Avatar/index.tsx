import type { ComponentProps } from 'react';
import classNames from 'classnames';
import avatarImage from '../../assets/avatar.jpeg';
import styles from './index.module.scss';

type AvatarProps = Omit<ComponentProps<'img'>, 'src'>;

const Avatar = ({
  alt = '头像',
  className,
  width = 48,
  height = 48,
  ...props
}: AvatarProps) => (
  <img
    {...props}
    src={avatarImage}
    alt={alt}
    width={width}
    height={height}
    decoding='async'
    className={classNames(styles.avatar, 'size-24', className)}
  />
);

export default Avatar;
