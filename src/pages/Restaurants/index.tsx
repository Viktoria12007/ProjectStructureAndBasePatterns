import {FC, useState} from "react";
import {SearchInput} from "../../ui/SearchInput";
import {useRestaurantsList} from "../../hooks/useRestaurantsList";
import {Card} from "../../ui/Card";
import './styles.css';
import {Loader} from "../../ui/Loader";

export const Restaurants: FC = () => {
    const { data, isError, isLoading, refetch } = useRestaurantsList();
    const [searchRestaurant, setSearchRestaurant] = useState('');

    const filteredRestaurants = data?.filter((restaurant) => restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase().trim()));

    return (
        <>
            <SearchInput
                placeholder="Search for restaurants"
                value={searchRestaurant}
                onFilterRestaurant={setSearchRestaurant}
            />
            <ul className="restaurants-list">
                { isError && <div>
                    <span>Произошла ошибка :(</span>
                    <button onClick={() => refetch()}>Повторить запрос</button>
                </div> }
                {isLoading && !isError && <Loader/>}
                {!isLoading && !isError &&
                                filteredRestaurants.map((restaurant) => (
                                    <Card
                                        key={restaurant.id}
                                        restaurant={restaurant}
                                    />
                                ))
                }
            </ul>
        </>
    )
}
