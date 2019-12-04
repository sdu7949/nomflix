import axios from "axios";

const api = axios.create({
    baseURL :"https://api.themoviedb.org/3/",
    params:{
        api_key : "6ead4c55bb7e6b2e1c6c59f1c80d4223",
        language : "en-US"
    }
});

export const moviesApi={
    nowPlaying : () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params:{
            append_to_response : "videos"
        }
    }),
    search : (term) => api.get("search/movie", {
        params:{
            query : encodeURIComponent(term)
        }
    })
};

export const tvApi={
    topRated : () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, {   //영화마다 id가 있기 때문에 id를 받아서 해당 영화정보 받아옴
        params : {
            append_to_response : "videos"   //디테일 누르면 딸려 나오는 각종 정보들 뽑아주는 파라미터
        }
    }),
    search : (term) => api.get("search/tv", {
        params:{
            query : encodeURIComponent(term)   //검색할때 스페이스바, 특수문자등 string으로 처리해주는 파라미터
        }
    })
};