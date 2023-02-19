import http from "./apiServices"

interface IgetPostList {
  limit: number
}

export const getPostList = ({ limit }: IgetPostList) => {
  return http.get("https://jsonplaceholder.typicode.com/posts", { params: { _limit: limit } })
}
