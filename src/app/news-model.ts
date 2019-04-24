export class NewsModel {
    constructor(
        public author: string,
        public content: string,
        public description: string,
        public publishedAt: string,
        public title: string,
        public url: string,
        public urlToImage: string,
    ) { }
}
