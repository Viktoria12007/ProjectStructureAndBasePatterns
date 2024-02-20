import {useMutation} from "@tanstack/react-query";
import {UpdateRestaurantRaitingArgs, updateRestaurantRating} from "../api/api";
import {queryClient} from "../api/queryClient";

type Response = {
    isError: boolean,
    isLoading: boolean,
}

export const useRestaurantRating = ({ id, raiting }: UpdateRestaurantRaitingArgs): Response => {
    const { isError, isLoading } = useMutation({
        mutationFn: () => updateRestaurantRating({ id, raiting}),
        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey: ['restaurants'] })
        }
    }, queryClient);
    return {
        isError,
        isLoading,
    }
}
