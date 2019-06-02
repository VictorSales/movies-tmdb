import InfiniteScroll from "react-infinite-scroller";
/**
 * Component InfiniteScroll modified to reset the page counter when necessary
 */
class InfiniteScrollExtend extends InfiniteScroll {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pageStart !== this.props.pageStart) {
      this.pageLoaded = 1;
    }
    this.attachScrollListener();
  }
}

export default InfiniteScrollExtend;
