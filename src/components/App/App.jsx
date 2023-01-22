import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { fetchPictures } from '../../services/pictures-api';
import { Searchbar } from 'components/Searchbar';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    loading: false,
  };

  // async componentDidMount() {
  //   try {
  //     const data = await fetchPictures();
  //     console.log(data);
  //   } catch (error) {}
  // }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </Container>
    );
  }
}
