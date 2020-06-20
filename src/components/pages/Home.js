import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class Home extends Component {
  state = { Home: [] };

  clickEvent(link) {
    console.log(link);
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Card className={'card-style'} href="/explore">
          <Card.Img
            className={'card-style'}
            variant="top"
            src="https://find-a-criterion.s3-us-west-1.amazonaws.com/Images/intro_card.png"
            a="/explore"
          />
          <Card.Body>
            <Card.Title className={'explore-card-title'}>
              Find a Criterion
            </Card.Title>
            <Card.Text className={'card-text'}>
              This is a website intended to aid in the process of finding a film
              in the Criterion Collection to watch. It provides a way to easily
              browse through the many collections in a way that mirrors the old
              website.
              <br />
              <br />
              I have been wanting to make this site ever since Criterion removed
              the "Explore" section from their website. All of these lists are
              still maintained but they are not put together in a convenient way
              to browse through them on the new site. The only way to find these
              lists now are through individual movies. If a movie belongs to a
              theme it might say so at the bottom of the page (usually doesn’t),
              or when you search for a movie and scroll down through the results
              it will show the lists it belongs to. The site does not have a
              page to leisurely browse through the 50+ theme/people lists. I
              wanted to make a site that gives people a convenient way to browse
              these lists.
              <br />
              <br />
              The lists themselves have also been changed in a few ways that
              hinder their usefulness. They are now tied to the Criterion.com
              store, and as a result they have been removing films as they go
              out of print. They have also replaced individual films for box
              sets, which do not always make sense for every film in the set to
              be part of a theme. For some time I was able to use Archive.org to
              look through all these lists, but as time went on the amount of
              new films missing added up.
              <br />
              <br />
              My plan for the future of this site is to expand it to include
              sections outside of Criterion movies to make a tool for
              discovering any type of film, not just Criterion published films,
              while maintaining the same kind of high curation standards that
              the Criterion Collection has. I would also like to implement a
              browse feature that lets you browse these films and see all the
              lists they belong to. I might end up linking the "Top 10" link to
              the actual Criterion website because it has it's own section on
              the site and is still useful.
              {/* My plan for the future of this site is to expand it to include any type of film, not just Criterion published films, while maintaining*/}
            </Card.Text>
          </Card.Body>
          <Link to="/explore" className="stretched-link"></Link>
        </Card>
      </Container>
    );
  }
}

export default Home;
