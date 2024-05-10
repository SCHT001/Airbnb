import { user } from "@/lib/axios";
import { T_responseUserData } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UserData {
  user: T_responseUserData;
}

const useGetLoggedInUser = (): UseQueryResult<UserData, any> => {
  return useQuery<UserData, any>({
    queryKey: ["user-data"],
    queryFn: async () => {
      const response = await user.get("/user/loggedIn");
      const data: { user: T_responseUserData } = response.data.data;
      return data;
    },
  });
};

export default useGetLoggedInUser;
