import {Restaurant, UpdateRestaurantRaitingArgs, updateRestaurantRating} from "../api/api";
import {useEffect, useState} from "react";

type TArgs = {
    data: Restaurant[],
    refetch: () => void,
}

type Response = {
    setChangeRating: (restaurantRaitingArgs: UpdateRestaurantRaitingArgs) => void;
}

export const useRestaurantRating = ({ data, refetch }: TArgs): Response => {
    const [changeRating, setChangeRating] = useState({ id: '', raiting: 0 });
    useEffect(() => {
        const restaurant = data?.find((restaurant) => restaurant.id === changeRating.id);

        if (restaurant) {
            updateRestaurantRating(changeRating).then(() => refetch());
        }
    }, [changeRating]);
    return {
        setChangeRating,
    }
}
