import { MovieService } from "./../../services/movie.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  currentPage: number = 1;
  paginationArray: number[] = [1, 2, 3, 4, 5, 6];

  @Input() page: string = "";
  @ViewChild('ionContent') content: IonContent

  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
  }

  increasePageCount() {
    if (this.currentPage < this.movieService.total_pages) {
      this.currentPage++;
      this.postPageData(this.currentPage)
    }

    const lastNumber = this.paginationArray[this.paginationArray.length - 1];
    let newPaginationArray = [];

    if (this.currentPage > lastNumber) {
      for (let i = lastNumber + 1; i < lastNumber + 7; i++) {
        newPaginationArray.push(i);
      }
      this.paginationArray = newPaginationArray;
    }
  }

  decreasePageCount() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.postPageData(this.currentPage)

      let newPaginationArray = [];
      let firstNumber = this.paginationArray[0];
      if (firstNumber !== 1 && this.currentPage === firstNumber - 1) {
        for (let i = firstNumber - 1; i > firstNumber - 7; i--) {
          newPaginationArray.push(i);
        }
        this.paginationArray = newPaginationArray.reverse();
      }
    }
  }

  postPageData(pageNumber?: number) {
    if (pageNumber && pageNumber <= this.movieService.total_pages) this.currentPage = pageNumber

    if (pageNumber <= this.movieService.total_pages) {
      if (this.page === 'discover') {
        this.router.navigate(['home'], { queryParams: { page: this.currentPage } })
        this.movieService.getAllMovies(this.currentPage)
      }

      if (this.page === 'filteredMoviesByGenre') {
        let genreId = this.route.snapshot.params.id
        let category = this.route.snapshot.queryParams.category

        this.router.navigate(['filtered-movie', genreId], { queryParams: { category: category, page: this.currentPage } })
        this.movieService.getMovieByGenre(genreId, this.currentPage)
      }

      if (this.page === 'top_rated') {
        this.movieService.getSpecificCategoryOfMovies('top_rated', this.currentPage)
        this.router.navigate(['/top-rated'], { queryParams: { page: this.currentPage } })
      }

      if (this.page === 'popular') {
        this.movieService.getSpecificCategoryOfMovies('popular', this.currentPage)
        this.router.navigate(['/popular'], { queryParams: { page: this.currentPage } })
      }

      if (this.page === 'upcoming') {
        this.movieService.getSpecificCategoryOfMovies('upcoming', this.currentPage)
        this.router.navigate(['/upcoming'], { queryParams: { page: this.currentPage } })
      }

      if (this.page === 'latest') {
        this.movieService.getSpecificCategoryOfMovies('latest', this.currentPage)
        this.router.navigate(['/latest'], { queryParams: { page: this.currentPage } })
      }
      if (this.page === 'search') {
        const searchWord = this.route.snapshot.queryParams.search
        const page = this.route.snapshot.queryParams.page
        this.movieService.searchMovie(searchWord, this.currentPage)
        this.router.navigate(['/search'], { queryParams: { search: searchWord, page: this.currentPage } })
      }
    }
  }

  paginationArrayInit() {
    let currentPageIndex = this.currentPage % 6
    let firstPaginationArray = [1, 2, 3, 4, 5, 6]
    let newArray = []

    if (!firstPaginationArray.includes(this.currentPage)) {
      if (currentPageIndex !== 0) {
        let firstItemOfArray = this.currentPage - (currentPageIndex - 1)
        for (let i = firstItemOfArray; i < firstItemOfArray + 6; i++) {
          newArray.push(i)
        }
      } else {
        for (let i = this.currentPage; i > this.currentPage - 6; i--) {
          newArray.push(i)
        }
        this.paginationArray = newArray.reverse()
      }
      this.paginationArray = newArray
    }
  }

  ngOnInit() {
    this.currentPage = parseInt(this.route.snapshot.queryParams.page)
    if (this.currentPage !== 1) this.paginationArrayInit()
  }

}
