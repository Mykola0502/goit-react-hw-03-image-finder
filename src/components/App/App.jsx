import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { fetchPictures } from '../../services/pictures-api';
import { Searchbar } from 'components/Searchbar';
import { Loader } from 'components/Loader';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    loading: false,
    images: [],
    page: 1,
    totalHits: 0,
    picturesHits: 0,
    error: null,
  };

  // async componentDidMount() {
  //   try {
  //     const data = await fetchPictures();
  //     console.log(data);
  //   } catch (error) {}
  // }

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    // const { page } = this.state;
    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      //   // console.log('Стейт змінився');
      //   // console.log('prevQuery', prevQuery);
      //   // console.log('nextQuery', nextQuery);
      //   fetchPictures(nextQuery).then(data => console.log(data));

      this.setState({ loading: true });
      // this.setState({ searchQuery, error: null, images: [], page: 1 });

      // this.onSearch(nextQuery, page);
      // this.setState({ images: [] });
      // setTimeout(() => {
      //   this.onSearch(nextQuery, nextPage);
      // }, 1000);
      this.onSearch(nextQuery, nextPage);
    }
    // this.setState(prevState => ({ images: [...prevState.images] }));
  }

  handleFormSubmit = query => {
    const { searchQuery } = this.state;
    if (searchQuery !== query.trim()) {
      this.setState({
        searchQuery: query.trim(),
        images: [],
        page: 1,
        totalHits: 0,
        picturesHits: 0,
      });
    }
  };

  async onSearch(query, page) {
    // this.setState({ loading: true });
    const { picturesHits } = this.state;

    try {
      // this.setState({ loading: true, error: null });
      const pictures = await fetchPictures(query, page);
      // console.log(pictures.hits);
      this.setState(prevState => ({
        images: [...prevState.images, ...pictures.hits],
        totalHits: pictures.totalHits,
        picturesHits: prevState.picturesHits + pictures.hits.length,
      }));
      // console.log(this.state.picturesHits);

      toast.success(
        `Found ${picturesHits + pictures.hits.length} images out of ${
          pictures.totalHits
        }`,
        {
          position: 'top-right',
          autoClose: 2000,
          theme: 'light',
        }
      );
    } catch (error) {
      this.setState({ error: 'No images found, try again😢' });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { searchQuery, images, totalHits, loading, error } = this.state;
    // console.log(totalHits);
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {/* {loading && <Loader />}
        {searchQuery ? (
          images.length ? (
            <ImageGallery images={images}></ImageGallery>
          ) : (
            <p>No images</p>
          )
        ) : (
          <p>Enter text</p>
        )} */}
        {error && <h2>{error}</h2>}

        {searchQuery ? (
          images.length ? (
            <ImageGallery images={images}></ImageGallery>
          ) : (
            !loading && !error && <h2>No images found for "{searchQuery}"</h2>
          )
        ) : (
          <h2>Enter text for search!</h2>
        )}
        {loading && <Loader />}
        {images.length > 0 && images.length < totalHits && (
          <Button onClick={this.loadMore} />
        )}

        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </Container>
    );
  }
}
