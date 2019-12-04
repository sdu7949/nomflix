import React from "react";
import SearchPresenter from "./SearchPresenter";
import {tvApi} from "api";
import {moviesApi} from "api";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",   //검색창
        error: null,
        loading: false
    };

 

    handleSubmit = event => {
        event.preventDefault();
        const {searchTerm} = this.state;  //state에 있는 searchTerm가 공백이 아니면 searchByTerm펑션 실행
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    updateTerm = (event) => {
        const {target :{value}} = event;
        this.setState({
            searchTerm : value
        });
    };

    searchByTerm = async() => {  //무언가 검색창에 쳐지면 실행되는 펑션
        const {searchTerm} = this.state;
        this.setState({
            loading:true
        });
        try{
            const {
                data: {results: movieResults}
            } = await moviesApi.search(searchTerm);
            const {
                data: {results:tvResults}
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults, tvResults
            });
            
        }catch{
            this.setState({
                error: "Can't find results. "
            });
        }finally{
            this.setState({
                loading : false
            })
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                error={error}
                loading={loading}
                searchTerm={searchTerm}
                handleSubmit={this.handleSubmit} 
                updateTerm={this.updateTerm}
            />
        );
    }
}