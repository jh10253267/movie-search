import { Component } from "../core/heropy";
import movieStroe, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    });
    movieStroe.subscribe('pageMax', () => {
      const { page, pageMax } = movieStroe.state;
      pageMax > page
        ? this.el.classList.remove('hide')
        : this.el.classList.add('hide');
    });
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide');
    this.el.textContent = 'View more...'

    this.el.addEventListener('click', async () =>{
      this.el.classList.add('hide');
      await searchMovies(movieStroe.state.page + 1);
    });
  }
}