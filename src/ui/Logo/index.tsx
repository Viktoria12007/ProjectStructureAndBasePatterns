import LogoIcon from '../../assets/stair.svg?react';
import './styles.css';
import {FC} from "react";

type TProps = {
    width: number,
    height: number,
    fill: string,
}

export const Logo: FC<TProps> = ({width, height, fill}) => {
    return (
        <div className="logo">
            <LogoIcon width={width} height={height} fill={fill} className="logo__icon" />
            <span style={{color: fill}}>Eats</span>
        </div>
    )
}
