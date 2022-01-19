import React from "react";
import SpaceCard from "../Card/Card";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";

export const ContainerMain = styled.div`
  width: 100 vw;
  align-items: center;
  text-align: center;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin: 5vh;
`;

export const LoadingContainer = styled.div`
  padding-top: 40vh;
  align-items: center;
`;
export default class GetData extends React.Component {
  state = {
    loading: true,
    info: null,
  };

  async componentDidMount() {
    const url =
      "https://api.nasa.gov/planetary/apod?end_date=2022-1-19&start_date=2022-1-1&api_key=QQWdvJ52wk7fU6am2273vV6nstKaujvfaCr9xWYn";

    const response = await fetch(url);
    const data = await response.json();
    const dataRev = data.reverse();
    this.setState({ info: dataRev, loading: false });
  }

  render() {
    return (
      <ContainerMain>
        {this.state.loading || !this.state.info ? (
          <LoadingContainer>
            <Audio heigth="35" width="35" color="grey" arialLabel="loading" />
          </LoadingContainer>
        ) : (
          <div>
            {this.state.info.length &&
              this.state.info.map((post, i) => {
                return (
                  <SpaceCard
                    key={i}
                    title={this.state.info[i].title}
                    image={this.state.info[i].hdurl}
                    author={this.state.info[i].copyright}
                    summary={this.state.info[i].explanation}
                    date={this.state.info[i].date}
                    status="unliked"
                  ></SpaceCard>
                );
              })}
          </div>
        )}
      </ContainerMain>
    );
  }
}
