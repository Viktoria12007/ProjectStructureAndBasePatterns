import StarIcon from '../../assets/star.svg?react';
import {FC} from "react";
import './styles.css';
import {Restaurant, UpdateRestaurantRaitingArgs} from "../../api/api";

type TProps = {
    restaurant: Restaurant,
    onRaitingRestaurant: (restaurantRaitingArgs: UpdateRestaurantRaitingArgs) => void,
}

export const Card: FC<TProps> = ({ restaurant, onRaitingRestaurant}) => {
    return (
        <li className="restaurants-list__item">
            <div className="restaurants-list__wrap">
                <img className="restaurants-list__img" src={restaurant.url} alt={restaurant.name}/>
                <h3 className="restaurants-list__title">{restaurant.name}</h3>
                <div className="restaurants-list__subtitle">{restaurant.description}</div>
            </div>
            <div className="restaurants-list__raiting">
                {[...Array(5)].map((item, index) => {
                    return <button
                                key={index}
                                className="restaurants-list__button"
                                onClick={() => onRaitingRestaurant({ id: restaurant.id, raiting: index + 1 <= restaurant.raiting ? index : index + 1})}
                            >
                                <StarIcon
                                    className="restaurants-list__icon"
                                    width={30}
                                    height={30}
                                    fill={index + 1 <= restaurant.raiting ? "red" : "transparent"}
                                />
                           </button>
                })}
            </div>
        </li>
    );
}
