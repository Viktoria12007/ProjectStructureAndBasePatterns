import './styles.css';
import {FC} from "react";

type TProps = {
    placeholder: string,
    value: string,
    onFilterRestaurant: (search: string) => void,
}

export const SearchInput: FC<TProps> = ({ placeholder, value, onFilterRestaurant,  }) => {
    return (
        <input
            type="text"
            className="search-input"
            value={value}
            onChange={(e) => onFilterRestaurant(e.target.value)}
            placeholder={placeholder}
        />
    )
}
