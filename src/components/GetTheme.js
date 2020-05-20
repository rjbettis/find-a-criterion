import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import combinedJson from './Combined';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import ThemeList from '../data/theme_list.json';

export class GetTheme extends Component {
  state = {
    films: [],
  };

  render() {
    const currentTheme = this.state.currentTheme;
    const currentSummary = this.state.currentSummary;
    const currentImage = this.state.currentImage;

    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/Explore/Themes">Themes</Breadcrumb.Item>
          <Breadcrumb.Item active>{currentTheme}</Breadcrumb.Item>
        </Breadcrumb>

        <Col className={'heading-style'}>
          <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_themes-013678553972c91e850a42072f55022a.gif" />
        </Col>

        <Col className={'theme-card-style my-3'}>
          <Card className={'theme-card-style'}>
            <Media>
              <Card.Img
                width={448}
                height={230}
                className={'theme-card-style my-4 mx-1'}
                src={currentImage}
              />
              <Card.Body className={'movie-card-text mx-4 my-4'}>
                <h4>
                  <strong>{currentTheme}</strong>
                </h4>
                {currentSummary}
              </Card.Body>
            </Media>
          </Card>
        </Col>

        <Row>
          {this.state.films.map((film) => {
            return (
              <Col xs={6} sm={5} md={4} lg={4} xl={4} key={film.title + 'Col'}>
                <Card className={'card-style my-3'} key={film.title}>
                  <Card.Img variant="top" src={film.image} />
                  <Card.Body>
                    <Card.Title className={'movie-title'}>
                      {film.title}
                    </Card.Title>
                    <Card.Text className={'movie-director'}>
                      {film.director}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }

  componentDidMount() {
    if (this.props.match.params.theme === 'AmericaAmerica') {
      this.setState({
        films: combinedJson.america_america,
        currentTheme: ThemeList.themes[0].title,
        currentSummary: ThemeList.themes[0].summary,
        currentImage: ThemeList.themes[0].image,
      });
    } else if (this.props.match.params.theme === 'AmourFou') {
      this.setState({
        films: combinedJson.amour_fou,
        currentTheme: ThemeList.themes[1].title,
        currentSummary: ThemeList.themes[1].summary,
        currentImage: ThemeList.themes[1].image,
      });
    } else if (this.props.match.params.theme === 'Animals') {
      this.setState({
        films: combinedJson.animals,
        currentTheme: ThemeList.themes[2].title,
        currentSummary: ThemeList.themes[2].summary,
        currentImage: ThemeList.themes[2].image,
      });
    } else if (this.props.match.params.theme === 'AvantGarde') {
      this.setState({
        films: combinedJson.avant_garde,
        currentTheme: ThemeList.themes[3].title,
        currentSummary: ThemeList.themes[3].summary,
        currentImage: ThemeList.themes[3].image,
      });
    } else if (this.props.match.params.theme === 'BlueChristmases') {
      this.setState({
        films: combinedJson.blue_christmases,
        currentTheme: ThemeList.themes[4].title,
        currentSummary: ThemeList.themes[4].summary,
        currentImage: ThemeList.themes[4].image,
      });
    } else if (this.props.match.params.theme === 'BritishRealism') {
      this.setState({
        films: combinedJson.british_realism,
        currentTheme: ThemeList.themes[5].title,
        currentSummary: ThemeList.themes[5].summary,
        currentImage: ThemeList.themes[5].image,
      });
    } else if (this.props.match.params.theme === 'CannesBigWinners') {
      this.setState({
        films: combinedJson.cannes_big_winners,
        currentTheme: ThemeList.themes[6].title,
        currentSummary: ThemeList.themes[6].summary,
        currentImage: ThemeList.themes[6].image,
      });
    } else if (this.props.match.params.theme === 'ClassicHollywood') {
      this.setState({
        films: combinedJson.classic_hollywood,
        currentTheme: ThemeList.themes[7].title,
        currentSummary: ThemeList.themes[7].summary,
        currentImage: ThemeList.themes[7].image,
      });
    } else if (this.props.match.params.theme === 'Comedies') {
      this.setState({
        films: combinedJson.comedies,
        currentTheme: ThemeList.themes[8].title,
        currentSummary: ThemeList.themes[8].summary,
        currentImage: ThemeList.themes[8].image,
      });
    } else if (this.props.match.params.theme === 'CompareAndContrast') {
      this.setState({
        films: combinedJson.compare_and_contrast,
        currentTheme: ThemeList.themes[9].title,
        currentSummary: ThemeList.themes[9].summary,
        currentImage: ThemeList.themes[9].image,
      });
    } else if (this.props.match.params.theme === 'CultMovies') {
      this.setState({
        films: combinedJson.cult_movies,
        currentTheme: ThemeList.themes[10].title,
        currentSummary: ThemeList.themes[10].summary,
        currentImage: ThemeList.themes[10].image,
      });
    } else if (this.props.match.params.theme === 'Cut') {
      this.setState({
        films: combinedJson.cut,
        currentTheme: ThemeList.themes[11].title,
        currentSummary: ThemeList.themes[11].summary,
        currentImage: ThemeList.themes[11].image,
      });
    } else if (this.props.match.params.theme === 'Documentaries') {
      this.setState({
        films: combinedJson.documentaries,
        currentTheme: ThemeList.themes[12].title,
        currentSummary: ThemeList.themes[12].summary,
        currentImage: ThemeList.themes[12].image,
      });
    } else if (this.props.match.params.theme === 'DysfunctionalFamilies') {
      this.setState({
        films: combinedJson.dysfunctional_families,
        currentTheme: ThemeList.themes[13].title,
        currentSummary: ThemeList.themes[13].summary,
        currentImage: ThemeList.themes[13].image,
      });
    } else if (this.props.match.params.theme === 'FaithOnFilm') {
      this.setState({
        films: combinedJson.faith_on_film,
        currentTheme: ThemeList.themes[14].title,
        currentSummary: ThemeList.themes[14].summary,
        currentImage: ThemeList.themes[14].image,
      });
    } else if (this.props.match.params.theme === 'FirstFilms') {
      this.setState({
        films: combinedJson.first_films,
        currentTheme: ThemeList.themes[15].title,
        currentSummary: ThemeList.themes[15].summary,
        currentImage: ThemeList.themes[15].image,
      });
    } else if (this.props.match.params.theme === 'FoodOnFilm') {
      this.setState({
        films: combinedJson.food_on_film,
        currentTheme: ThemeList.themes[16].title,
        currentSummary: ThemeList.themes[16].summary,
        currentImage: ThemeList.themes[16].image,
      });
    } else if (this.props.match.params.theme === 'FrenchNewWave') {
      this.setState({
        films: combinedJson.french_new_wave,
        currentTheme: ThemeList.themes[17].title,
        currentSummary: ThemeList.themes[17].summary,
        currentImage: ThemeList.themes[17].image,
      });
    } else if (this.props.match.params.theme === 'GreatSoundtracks') {
      this.setState({
        films: combinedJson.great_soundtracks,
        currentTheme: ThemeList.themes[18].title,
        currentSummary: ThemeList.themes[18].summary,
        currentImage: ThemeList.themes[18].image,
      });
    } else if (this.props.match.params.theme === 'GrowingPains') {
      this.setState({
        films: combinedJson.growing_pains,
        currentTheme: ThemeList.themes[19].title,
        currentSummary: ThemeList.themes[19].summary,
        currentImage: ThemeList.themes[19].image,
      });
    } else if (this.props.match.params.theme === 'HeistMovies') {
      this.setState({
        films: combinedJson.heist_movies,
        currentTheme: ThemeList.themes[20].title,
        currentSummary: ThemeList.themes[20].summary,
        currentImage: ThemeList.themes[20].image,
      });
    } else if (this.props.match.params.theme === 'IndependentAmericanCinema') {
      this.setState({
        films: combinedJson.independent_american_cinema,
        currentTheme: ThemeList.themes[21].title,
        currentSummary: ThemeList.themes[21].summary,
        currentImage: ThemeList.themes[21].image,
      });
    } else if (this.props.match.params.theme === 'ItalianNeorealism') {
      this.setState({
        films: combinedJson.italian_neorealism,
        currentTheme: ThemeList.themes[22].title,
        currentSummary: ThemeList.themes[22].summary,
        currentImage: ThemeList.themes[22].image,
      });
    } else if (this.props.match.params.theme === 'JapaneseNewWave') {
      this.setState({
        films: combinedJson.japanese_new_wave,
        currentTheme: ThemeList.themes[23].title,
        currentSummary: ThemeList.themes[23].summary,
        currentImage: ThemeList.themes[23].image,
      });
    } else if (this.props.match.params.theme === 'LittleSomethingExtra') {
      this.setState({
        films: combinedJson.little_something_extra,
        currentTheme: ThemeList.themes[24].title,
        currentSummary: ThemeList.themes[24].summary,
        currentImage: ThemeList.themes[24].image,
      });
    } else if (this.props.match.params.theme === 'MadeDuringWorldWarII') {
      this.setState({
        films: combinedJson.made_during_world_war_ii,
        currentTheme: ThemeList.themes[25].title,
        currentSummary: ThemeList.themes[25].summary,
        currentImage: ThemeList.themes[25].image,
      });
    } else if (this.props.match.params.theme === 'Melodrama') {
      this.setState({
        films: combinedJson.melodrama,
        currentTheme: ThemeList.themes[26].title,
        currentSummary: ThemeList.themes[26].summary,
        currentImage: ThemeList.themes[26].image,
      });
    } else if (this.props.match.params.theme === 'NewAmericanCinema') {
      this.setState({
        films: combinedJson.melodrama,
        currentTheme: ThemeList.themes[27].title,
        currentSummary: ThemeList.themes[27].summary,
        currentImage: ThemeList.themes[27].image,
      });
    } else if (this.props.match.params.theme === 'NewGermanCinema') {
      this.setState({
        films: combinedJson.new_german_cinema,
        currentTheme: ThemeList.themes[28].title,
        currentSummary: ThemeList.themes[28].summary,
        currentImage: ThemeList.themes[28].image,
      });
    } else if (this.props.match.params.theme === 'NewYorkStories') {
      this.setState({
        films: combinedJson.new_york_stories,
        currentTheme: ThemeList.themes[29].title,
        currentSummary: ThemeList.themes[29].summary,
        currentImage: ThemeList.themes[29].image,
      });
    } else if (this.props.match.params.theme === 'NoirAndNeonoir') {
      this.setState({
        films: combinedJson.noir_and_neonoir,
        currentTheme: ThemeList.themes[30].title,
        currentSummary: ThemeList.themes[30].summary,
        currentImage: ThemeList.themes[30].image,
      });
    } else if (this.props.match.params.theme === 'NovelsOnTheBigScreen') {
      this.setState({
        films: combinedJson.novels_on_the_big_screen,
        currentTheme: ThemeList.themes[31].title,
        currentSummary: ThemeList.themes[31].summary,
        currentImage: ThemeList.themes[31].image,
      });
    } else if (this.props.match.params.theme === 'Originals') {
      this.setState({
        films: combinedJson.originals,
        currentTheme: ThemeList.themes[32].title,
        currentSummary: ThemeList.themes[32].summary,
        currentImage: ThemeList.themes[32].image,
      });
    } else if (this.props.match.params.theme === 'OscarWinners') {
      this.setState({
        films: combinedJson.oscar_winners,
        currentTheme: ThemeList.themes[33].title,
        currentSummary: ThemeList.themes[33].summary,
        currentImage: ThemeList.themes[33].image,
      });
    } else if (this.props.match.params.theme === 'OutAtCriterion') {
      this.setState({
        films: combinedJson.out_at_criterion,
        currentTheme: ThemeList.themes[34].title,
        currentSummary: ThemeList.themes[34].summary,
        currentImage: ThemeList.themes[34].image,
      });
    } else if (this.props.match.params.theme === 'PoeticRealism') {
      this.setState({
        films: combinedJson.poetic_realism,
        currentTheme: ThemeList.themes[35].title,
        currentSummary: ThemeList.themes[35].summary,
        currentImage: ThemeList.themes[35].image,
      });
    } else if (this.props.match.params.theme === 'RoadTrips') {
      this.setState({
        films: combinedJson.road_trips,
        currentTheme: ThemeList.themes[36].title,
        currentSummary: ThemeList.themes[36].summary,
        currentImage: ThemeList.themes[36].image,
      });
    } else if (this.props.match.params.theme === 'SamuraiCinema') {
      this.setState({
        films: combinedJson.samurai_cinema,
        currentTheme: ThemeList.themes[37].title,
        currentSummary: ThemeList.themes[37].summary,
        currentImage: ThemeList.themes[37].image,
      });
    } else if (this.props.match.params.theme === 'ScaryMovies') {
      this.setState({
        films: combinedJson.scary_movies,
        currentTheme: ThemeList.themes[38].title,
        currentSummary: ThemeList.themes[38].summary,
        currentImage: ThemeList.themes[38].image,
      });
    } else if (this.props.match.params.theme === 'SilentCinema') {
      this.setState({
        films: combinedJson.silent_cinema,
        currentTheme: ThemeList.themes[39].title,
        currentSummary: ThemeList.themes[39].summary,
        currentImage: ThemeList.themes[39].image,
      });
    } else if (this.props.match.params.theme === 'SilentComedies') {
      this.setState({
        films: combinedJson.silent_comedies,
        currentTheme: ThemeList.themes[40].title,
        currentSummary: ThemeList.themes[40].summary,
        currentImage: ThemeList.themes[40].image,
      });
    } else if (this.props.match.params.theme === 'SongAndDance') {
      this.setState({
        films: combinedJson.song_and_dance,
        currentTheme: ThemeList.themes[41].title,
        currentSummary: ThemeList.themes[41].summary,
        currentImage: ThemeList.themes[41].image,
      });
    } else if (this.props.match.params.theme === 'StageToScreen') {
      this.setState({
        films: combinedJson.stage_to_screen,
        currentTheme: ThemeList.themes[42].title,
        currentSummary: ThemeList.themes[42].summary,
        currentImage: ThemeList.themes[42].image,
      });
    } else if (this.props.match.params.theme === 'Suspense') {
      this.setState({
        films: combinedJson.suspense,
        currentTheme: ThemeList.themes[43].title,
        currentSummary: ThemeList.themes[43].summary,
        currentImage: ThemeList.themes[43].image,
      });
    } else if (this.props.match.params.theme === 'Tearjerkers') {
      this.setState({
        films: combinedJson.tearjerkers,
        currentTheme: ThemeList.themes[44].title,
        currentSummary: ThemeList.themes[44].summary,
        currentImage: ThemeList.themes[44].image,
      });
    } else if (this.props.match.params.theme === 'Technicolor') {
      this.setState({
        films: combinedJson.technicolor,
        currentTheme: ThemeList.themes[45].title,
        currentSummary: ThemeList.themes[45].summary,
        currentImage: ThemeList.themes[45].image,
      });
    } else if (this.props.match.params.theme === 'VirtuallyReality') {
      this.setState({
        films: combinedJson.virtually_reality,
        currentTheme: ThemeList.themes[46].title,
        currentSummary: ThemeList.themes[46].summary,
        currentImage: ThemeList.themes[46].image,
      });
    } else if (this.props.match.params.theme === 'WarFilms') {
      this.setState({
        films: combinedJson.war_films,
        currentTheme: ThemeList.themes[47].title,
        currentSummary: ThemeList.themes[47].summary,
        currentImage: ThemeList.themes[47].image,
      });
    } else if (this.props.match.params.theme === 'Westerns') {
      this.setState({
        films: combinedJson.westerns,
        currentTheme: ThemeList.themes[48].title,
        currentSummary: ThemeList.themes[48].summary,
        currentImage: ThemeList.themes[48].image,
      });
    } else if (this.props.match.params.theme === 'Yakuza') {
      this.setState({
        films: combinedJson.yakuza,
        currentTheme: ThemeList.themes[49].title,
        currentSummary: ThemeList.themes[49].summary,
        currentImage: ThemeList.themes[49].image,
      });
    }

    window.scrollTo(0, 0);
  }
}

export default GetTheme;
