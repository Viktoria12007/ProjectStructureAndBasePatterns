import './styles.css';
import {FC} from "react";

type TProps = {
    url: string,
}

export const UserAvatar: FC<TProps> = ({ url }) => {
    return (
        <div className="profile">
            <img alt="profile" src={url} />
        </div>
    )
}
