import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() listData?: any[];
  @Output() itemsForCurrentPageEventEmitter: EventEmitter<any[]> = new EventEmitter<any[]>(true);
  currentPageNumber: number = 1;
  pages: number[] = [];
  selectablePages: number[] = [1];
  numberOfPages: number = 1;
  firstPage: number = 1;
  lastPage: number = 1;
  numberOfPagesToDisplay: number = 5;
  numberOfItemsToDisplay: number = 4;
  segmentStart = 1;
  segmentEnd = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if (changes.listData.currentValue) {
      this.numberOfPages = this.listData && this.listData.length > this.numberOfItemsToDisplay
        ? Math.ceil(this.listData.length / this.numberOfItemsToDisplay): 1;
      this.listData?.forEach((ld, i) => this.pages.push(i + 1));
      this.firstPage = 1;
      this.lastPage = this.numberOfPages;
      this.segmentStart = this.currentPageNumber;
      this.segmentEnd = this.currentPageNumber + this.numberOfItemsToDisplay;
      this.setSelectablePages();
      this.setItemsForCurrentPage(this.currentPageNumber);
    }
  }

  setSelectablePages() {
    if ((this.currentPageNumber <= this.segmentStart && this.currentPageNumber >= this.firstPage)
      || (this.currentPageNumber >= this.segmentEnd && this.currentPageNumber < this.lastPage)) {
      this.selectablePages = [];
      this.segmentStart = this.currentPageNumber;
      this.segmentEnd = (this.currentPageNumber - 1) + this.numberOfPagesToDisplay;
      for (let i = this.segmentStart; i <= this.segmentEnd && i < this.lastPage; i++) {
        this.selectablePages.push(i);
      }
    }
  }

  setItemsForCurrentPage(currentPageNumber: number) {
    if (this.listData) {
      let end = currentPageNumber * this.numberOfItemsToDisplay;
      let start = end - this.numberOfItemsToDisplay
      this.itemsForCurrentPageEventEmitter.emit(this.listData.slice(start, end));
    }
  }

  goToPage(pageNumber: number) {
    this.currentPageNumber = pageNumber;
    this.setSelectablePages();
    this.setItemsForCurrentPage(this.currentPageNumber);
  }

  goToNextPage() {
    let tempCurrentPage = this.currentPageNumber + 1;

    if (tempCurrentPage < this.lastPage)
      this.currentPageNumber += 1;
    else if (tempCurrentPage >= this.lastPage)
      this.currentPageNumber = this.lastPage;

    this.setSelectablePages();
    this.setItemsForCurrentPage(this.currentPageNumber);
  }

  goToPreviousPage() {
    let tempCurrentPage = this.currentPageNumber - 1;
    if (tempCurrentPage > this.firstPage)
      this.currentPageNumber -= 1
    else if (tempCurrentPage <= this.firstPage)
      this.currentPageNumber = this.firstPage;

    this.setSelectablePages();
    this.setItemsForCurrentPage(this.currentPageNumber);
  }
}
