import {useQuery} from "@tanstack/react-query";
import {getRestaurants, Restaurant} from "../api/api";
import {queryClient} from "../api/queryClient";

type Response = {
    data: Restaurant[],
    isError: boolean,
    isLoading: boolean,
    refetch: () => void,
}

export const useRestaurantsList = (): Response => {
    const { data, isError, isLoading, refetch } = useQuery({
        queryFn: getRestaurants,
        queryKey: ["restaurants"],
    }, queryClient);
    return {
        data,
        isError,
        isLoading,
        refetch,
    }
}
